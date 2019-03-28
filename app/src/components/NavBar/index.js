import React from 'react'
import { observer } from 'mobx-react'
import { Tabs } from 'antd'
import Particles from 'react-particles-js'
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

  renderParticlesBackground = () => (
    <Particles 
      className="particles"
      params={{
                    particles: {
                        shape: {
                            type: 'images',
                            images: [
                                {src: 'assets/batman-new.svg', height: 20, width: 20},
                            ],
                        },
                        number: {
                            value: 50,
                            density: {
                                enable: true,
                                value_area: 700,
                            },
                        },
                        move: {
                            direction: "right",
                            speed: 0.7,
                        },
                        size: {
                            value: 2,
                        },
                        opacity: {
                            anim: {
                                enable: true,
                                speed: 2,
                                opacity_min: 0.5,
                            },
                        },
                    },
                    retina_detect: true,
                }}
    />
  )

  render() {
    const renderParticles = this.renderParticlesBackground()
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
        {renderParticles}
      </div>
    )
  }
}

export default NavBar
