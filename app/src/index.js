import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'mobx-react'
import Store from './store'
import App from './components/App'
import 'antd/dist/antd.css'
import './style/style.scss'

export const store = new Store()

function Index() {
  return (
    <Provider store={store}>
      <div className="index">
        <App />
      </div>
    </Provider>
  )
}

ReactDOM.render(<Index />, document.getElementById('root'))

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
}
