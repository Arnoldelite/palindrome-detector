import React from 'react'
import { observer } from 'mobx-react'
import './style.scss'
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
        <MessageInput />
        <Messages messages={store.messages} isLoading={store.isLoading} />
        <EditModal message={store.messageInput} />
      </div>
    )
  }
}

export default App
