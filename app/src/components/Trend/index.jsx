import React from 'react'
import { observer } from 'mobx-react'
import { Tabs } from 'antd'
import Header from '../Header'
import Popular from '../Popular'
import TrendingGifs from '../TrendingGifs'

import { listPopular, listTrendingGifs } from '../../actions'
import './style.scss'

const TabPane = Tabs.TabPane

@observer
class Trend extends React.Component {
  async componentDidMount() {
    await listPopular('All')
    await listTrendingGifs()
  }

  async callback(key) {
    console.log(key)
    await listTrendingGifs()
  }

  render() {
    return (
      <div className="tab-bar">
        <Header />
        <Tabs animated={true} defaultActiveKey="1" onChange={this.callback}>
          <TabPane tab="Popular Repos" key="1">
            <Popular />
          </TabPane>
          <TabPane tab="Trending Gifs" key="2">
            <TrendingGifs />
          </TabPane>
        </Tabs>
      </div>
    )
  }
}

export default Trend
