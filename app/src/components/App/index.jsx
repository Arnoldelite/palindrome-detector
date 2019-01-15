import React from 'react'
import { Layout } from 'antd'
import { observer } from 'mobx-react'
import './style.scss'
import Particles from 'react-particles-js'

const { Content } = Layout

@observer
class App extends React.Component {
  render() {
    return (
      <Layout className="app">
        <Layout className="app__layout">
          <Content className="app__content">
            <div>
              sfssdff
              <Particles
                params={{
                  particles: {
                    number: {
                      value: 50,
                    },
                    size: {
                      value: 3,
                    },
                  },
                  interactivity: {
                    events: {
                      onhover: {
                        enable: true,
                        mode: 'repulse',
                      },
                    },
                  },
                }}
              />
            </div>
          </Content>
        </Layout>
      </Layout>
    )
  }
}

export default App
