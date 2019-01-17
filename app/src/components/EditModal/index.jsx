import React from 'react'
import { Modal, Tag } from 'antd'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import Particles from 'react-particles-js'
import MessageInput from '../MessageInput'
import { store } from '../..'
import './style.scss'

@observer
class EditModal extends React.Component {
  state = {
    message: {},
  }

  componentDidMount() {
    this.setState({ message: this.props.messagecontent })
  }

  render() {
    return (
      <Modal
        className="edit-modal"
        destroyOnClose
        title="Edit message"
        onCancel={() => store.showEditModal(false)}
        visible={store.isEditModalVisible}
        footer={null}
      >
        <MessageInput className="input" message={this.props.message} />
        {store.messageContent.isPalindrome ? (
          <Tag color="green">Palindrome</Tag>
        ) : (
          <Tag color="pink">Not Palindrome</Tag>
        )}
        <Particles
          className="particles"
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
      </Modal>
    )
  }
}

EditModal.propTypes = {
  message: PropTypes.object.isRequired,
  messagecontent: PropTypes.object.isRequired,
}

export default EditModal
