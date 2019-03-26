import React from 'react'
import { observer } from 'mobx-react'
import './style.scss'
// import Header from '../Header'
import Particles from 'react-particles-js'
import Messages from '../Messages'
import MessageInput from '../MessageInput'
import EditModal from '../EditModal'
import { store } from '../..'
import { list } from '../../actions'

@observer
class App extends React.Component {
  async componentDidMount() {
    await list()
  }

  renderParticlesBackGround = () => (
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
      const renderParticles = this.renderParticlesBackGround()
    return (
      <div className="app">     
        <MessageInput />
        {renderParticles}
        <Messages messages={store.messages} isLoading={store.isLoading} />
        <EditModal message={store.messageInput} /> 
      </div>
    )
  }
}

export default App
