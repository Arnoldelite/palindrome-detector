import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { List, Skeleton, Icon, notification } from 'antd'
import IsPalindrome from '../IsPalindrome'
import { store } from '../..'
import { remove, get } from '../../actions'
import './style.scss'

@observer
class Messages extends React.Component {
  componentDidMount() {
    notification.config({
      placement: 'bottomRight',
      duration: 2,
    })
  }

  async editMessage(item) {
    await get(item.objectId)
    store.showEditModal(true)
  }

  removeMessage(item) {
    remove(item)
    notification.open({
      message: 'Message Deleted!',
      description: item.content,
      icon: <Icon type="delete" theme="outlined" />,
    })
  }

  render() {
    return (
      <div className="message">
        <List
          className="message__list"
          loading={this.props.isLoading}
          itemLayout="horizontal"
          dataSource={this.props.messages}
          renderItem={item => (
            <List.Item
              key={item.objectId}
              actions={[
                <Icon type="edit" onClick={() => this.editMessage(item)} theme="outlined" />,
                <Icon type="delete" onClick={() => this.removeMessage(item)} theme="outlined" />,
              ]}
            >
              <Skeleton title={false} loading={this.props.isLoading} active>
                <List.Item.Meta title={item.content} />
                <IsPalindrome isPalindrome={item.isPalindrome} />
              </Skeleton>
            </List.Item>
          )}
        />
      </div>
    )
  }
}

Messages.propTypes = {
  messages: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
}

export default Messages
