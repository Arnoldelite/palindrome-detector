import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { Input, Button, notification, Icon } from 'antd'
import { store } from '../..'
import { save, update } from '../../actions'
import './style.scss'

@observer
class MessageInput extends React.Component {
  state = {
    objectId: null,
    content: '',
  }

  componentDidMount() {
    this.setMessage(this.props.message)
    notification.config({
      placement: 'bottomRight',
      duration: 2,
    })
  }

  saveMessage() {
    if (this.state.content) {
      const { objectId, content } = this.state
      if (objectId) {
        update({ objectId, content })
        notification.open({
          message: 'Message Saved!',
          description: content,
          icon: <Icon type="save" theme="outlined" />,
        })
      } else {
        save({ content })
        notification.open({
          message: 'Message Saved!',
          description: content,
          icon: <Icon type="save" theme="outlined" />,
        })
      }
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
          size="large"
          value={this.state.content}
          onChange={e => this.setMessage({ content: e.target.value })}
          onPressEnter={() => this.saveMessage()}
        />

        {this.state.content && (
          <Button
            size="large"
            className="message-input__save"
            type="primary"
            onClick={() => this.saveMessage()}
          >
            Save
          </Button>
        )}
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
