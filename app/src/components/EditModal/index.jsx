import React from 'react'
import { Modal } from 'antd'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import Particles from 'react-particles-js'
import MessageInput from '../MessageInput'
import IsPalindrome from '../IsPalindrome'
import { store } from '../..'
import './style.scss'

@observer
class EditModal extends React.Component {
  renderParticlesBackground = () => (
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
  )

  render() {
    const renderParticles = this.renderParticlesBackground()
    return (
      <Modal
        className="edit-modal"
        destroyOnClose
        title={<IsPalindrome isPalindrome={store.messageInput.isPalindrome} />}
        onCancel={() => store.showEditModal(false)}
        visible={store.isEditModalVisible}
        footer={null}
      >
        <MessageInput className="input" message={this.props.message} />
        {renderParticles}
      </Modal>
    )
  }
}

EditModal.propTypes = {
  message: PropTypes.object.isRequired,
}

export default EditModal
