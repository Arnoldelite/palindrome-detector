import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'mobx-react'
import stores from './stores'
import { history } from './stores/routeStore'
import App from './components/App'
import 'antd/dist/antd.css'
import './style/style.scss'

function Index() {
  return (
    <Provider {...stores}>
      <div className="index">
        <Router history={history}>
          <Switch>
            <Route path="/" component={App} />
          </Switch>
        </Router>
      </div>
    </Provider>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}
