import React from 'react'
import { Modal } from 'antd'
import { observer } from 'mobx-react'
import PropTypes from 'prop-types'
import MessageInput from '../MessageInput'
import { store } from '../..'
import './style.scss'

@observer
class EditModal extends React.Component {
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
        <MessageInput message={this.props.message} />
      </Modal>
    )
  }
}

EditModal.propTypes = {
  message: PropTypes.object.isRequired,
}

export default EditModal
