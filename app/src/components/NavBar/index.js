import React from 'react'
import { observer } from 'mobx-react'
import { Tabs } from 'antd'
import Header from '../Header'
import App from '../App'
import Popular from '../Popular'

import { listPopular } from '../../actions'
import './style.scss'

const TabPane = Tabs.TabPane

@observer
class NavBar extends React.Component {
  async componentDidMount() {
    await listPopular('All')
  }

  async callback(key) {
    console.log(key)
    // if (key === "2") {
    // await listPopular('All')
    // }
  }

  render() {
    return (
      <div className="tab-bar">
        <Header />
        <Tabs animated={true} defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="Palindrome" key="1">
            <App />
          </TabPane>
          <TabPane tab="Popular Repos" key="2">
            <Popular />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default NavBar
