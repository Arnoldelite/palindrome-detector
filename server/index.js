import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import Parse from 'parse/node'
import path from 'path'
import serveStatic from 'serve-static'
import messageRoutes from './src/routes/message-routes'

const ParseDashboard = require('parse-dashboard')

const app = express()
export const router = express.Router()
const jsonParser = bodyParser.json({
  type: 'application/json',
})

export const initializeParse = () => {
  Parse.initialize('appId', 'masterKey')
  Parse.serverURL = 'http://localhost:1337/parse'
  Parse.masterKey = 'masterKey'
  return Parse
}

initializeParse()

const parseDashboard = new ParseDashboard(
  {
    apps: [
      {
        serverURL: 'http://localhost:1337/parse',
        appId: 'appId',
        masterKey: 'masterKey',
        appName: 'dev',
      },
    ],
  },
  { allowInsecureHTTP: true },
)

// Middlewares
app.use(jsonParser)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())
app.use(morgan('tiny'))
app.use('/dashboard', parseDashboard)

// Statics
app.use('/app', serveStatic('./server/app/'))
app.use('/apidoc', serveStatic('./server/apidoc/'))

// Routes
app.use('/', messageRoutes)
app.get('/app', (_, res) => res.sendFile(path.join(`${__dirname}/app/index.html`)))
app.get('*', (_, res) => res.sendFile(path.join(`${__dirname}/app/index.html`)))

export default app
