import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
// import { Router, Route } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Store from './store'
import NavBar from './components/NavBar'
// import Popular from './components/Popular'
import 'antd/dist/antd.css'
import './style/style.scss'

export const store = new Store()

function Index() {
  return (
    <Provider store={store}>
      <Router>
        <div className="index">
          <Route exact path="/popular" component={NavBar} />
          <Route path="/app" component={NavBar} />
          {/* <Route path="/" component={App} /> */}
        </div>
      </Router>
    </Provider>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}
