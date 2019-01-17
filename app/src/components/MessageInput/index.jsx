import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { Input, Button, Icon } from 'antd'
import { store } from '../..'
import { save } from '../../actions'
import './style.scss'

@observer
class MessageInput extends React.Component {
  state = {
    objectId: null,
    content: '',
  }

  componentDidMount() {
    this.setMessage(this.props.message)
  }

  saveMessage() {
    if (this.state.content) {
      const { objectId, content } = this.state
      save({ objectId, content })
      store.showEditModal(false)
      this.setState({ objectId: null, content: '' })
    }
  }

  setMessage = message => this.setState(message)

  render() {
    return (
      <div className="message-input">
        <Input
          placeholder="Enter message"
          allowClear
          value={this.state.content}
          onChange={e => this.setMessage({ content: e.target.value })}
          onPressEnter={() => this.saveMessage()}
        />
        {/* <Button className="message-input__save" type="primary" onClick={() => this.saveMessage()}>
          Send <Icon type="right" />
        </Button> */}
      </div>
    )
  }
}

MessageInput.propTypes = {
  message: PropTypes.object,
}

MessageInput.defaultProps = {
  message: {},
}

export default MessageInput
