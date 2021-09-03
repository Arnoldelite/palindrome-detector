import { useState } from 'react';

const useModal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
	setIsModalVisible(true);
  };

  const handleOk = () => {
	setIsModalVisible(false);
  };

  const handleCancel = () => {
	setIsModalVisible(false);
  };

  return {
    isModalVisible,
    showModal,
	handleOk,
	handleCancel
  }
};

export default useModal;