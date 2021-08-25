import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { List, Skeleton, Icon, notification, Tooltip } from 'antd'
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
    const editText = 'edit word / phrase'
    const deleteText = 'delete text'
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
                <Tooltip placement="bottom" title={editText}>
                  <Icon type="edit" onClick={() => this.editMessage(item)} theme="outlined" />
                </Tooltip>,
                <Tooltip placement="bottom" title={deleteText}>
                  <Icon type="delete" onClick={() => this.removeMessage(item)} theme="outlined" />
                </Tooltip>,
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
