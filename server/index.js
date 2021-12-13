import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import path from 'path'
import Parse from 'parse/node'
import serveStatic from 'serve-static'
import messageRoutes from './src/routes/message-routes'

const ParseServer = require('parse-server').ParseServer
const ParseDashboard = require('parse-dashboard')
const tweetHandler = require('./src/listing/tweet-handler');

export const port = process.env.PORT ? process.env.PORT : 3000
const app = express()
export const router = express.Router()
const jsonParser = bodyParser.json({ type: 'application/json' })

const databaseURI = process.env.PROD
  ? 'mongodb://mongodb:27017/palindrome-detector'
  : 'mongodb://localhost:27017/palindrome-detector'

export const parseConfig = {
  appId: 'myAppId',
  masterKey: 'myMasterKey',
  databaseURI,
  serverURL: `http://localhost:${port}/parse/`,
}

Parse.initialize(parseConfig.appId, parseConfig.master);
Parse.serverURL = parseConfig.serverURL;

const parseServer = new ParseServer({
  databaseURI,
  appId: parseConfig.appId,
  masterKey: parseConfig.masterKey,
  serverURL: parseConfig.serverURL,
})

const parseDashboard = new ParseDashboard(
  {
    apps: [
      {
        serverURL: '/parse',
        appId: parseConfig.appId,
        masterKey: parseConfig.masterKey,
        appName: 'Palindrome Detector',
      },
    ],
    users: [
      {
        user: 'bruce',
        pass: 'wayne',
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

if (process.env.NODE_ENV !== 'test') {
  app.use('/parse', parseServer)
  app.use('/dashboard', parseDashboard)
}

// Statics
app.use('/app', serveStatic('./server/app/'))
app.use('/apidoc', serveStatic('./server/apidoc/'))

// Routes
app.use('/', messageRoutes)
// define twitter api
app.get('/api/tweets', tweetHandler);
app.get('/app', (_, res) => res.sendFile(path.join(`${__dirname}/app/index.html`)))
app.get('*', (_, res) => res.sendFile(path.join(`${__dirname}/app/index.html`)))


export default app
