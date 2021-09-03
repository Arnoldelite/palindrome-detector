import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button, Divider } from 'antd';


const ApartmentModal = ({ isModalVisible, transaction, handleOk, handleCancel }) => isModalVisible ? ReactDOM.createPortal(
  <React.Fragment>
  <Modal data-testid="apartment-modal" title={transaction?.building_name} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
			<img src={'../img/' + transaction.image_id + '.jpg'} alt="Selected Apartment" width="60%" height="60%"/>
			<Divider plain></Divider>
			<p>Address: {transaction?.address}</p>
			<p>Bathrooms: {transaction?.bathrooms}</p>
			<p>Bedrooms: {transaction?.bedrooms}</p>
			<p>Price : ${transaction?.price}</p>
			<p>City: {transaction?.city}</p>
			<p>State: {transaction?.state}</p>
      	</Modal>
  </React.Fragment>, document.body
) : null;

export default ApartmentModal;