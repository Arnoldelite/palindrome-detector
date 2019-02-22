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

  render() {
    return (
      <div className="app">
        {/* <Header /> */}
        <Particles
          className="particles"
          params={{
            particles: {
                number: {
                    value: 90,
                    density: {
                        enable: true,
                        value_area: 700,
                    },
                },
                line_linked: {
                    enable: true,
                    opacity: 0.2,
                },
                move: {
                    direction: "right",
                    speed: 0.5,
                },
                size: {
                    value: 1,
                },
                opacity: {
                    anim: {
                        enable: true,
                        speed: 2,
                        opacity_min: 0.5,
                    },
                },
            },
            interactivity: {
                events: {
                    onclick: {
                        enable: true,
                        mode: "push",
                    },
                },
                modes: {
                    push: {
                        particles_nb: 1,
                    },
                },
            },
            retina_detect: true,
        }}
        />
        <MessageInput />
        <Messages messages={store.messages} isLoading={store.isLoading} />
        <EditModal message={store.messageInput} />
      </div>
    )
  }
}

export default App
