import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { List, Skeleton, Tag } from 'antd'
import { store } from '../..'
import { remove } from '../../actions'
import './style.scss'

@observer
class Messages extends React.Component {
  editMessage(item) {
    store.setMessage(item)
    store.showEditModal(true)
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
                <a onClick={() => this.editMessage(item)}>edit</a>,
                <a onClick={() => remove(item.objectId)}>delete</a>,
              ]}
            >
              <Skeleton title={false} loading={this.props.isLoading} active>
                <List.Item.Meta title={item.content} />
                {item.isPalindrome ? (
                  <Tag color="green">Palindrome</Tag>
                ) : (
                  <Tag color="pink">Not Palindrome</Tag>
                )}
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
