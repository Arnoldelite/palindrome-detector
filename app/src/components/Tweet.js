import React, {  useState } from 'react';
import { Card, List } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import {  Button, Avatar, Divider  } from 'antd';
import { useDrag } from 'react-dnd'
// import { useDrag, useDrop } from 'react-dnd'
import TweetModal from './TweetModal';
import useModal from '../hooks/useModal';



const { Meta } = Card;


const Tweet = ({ tweets, saved, saveTweet,   isLoading }) => {

  const [details, setDetails] = useState({});
  const {isModalVisible, showModal, handleOk, handleCancel} = useModal();
  const [dragItem, setDragItem] = useState({});

  const [{ opacity }, dragRef] = useDrag(
    () => ({
      type: 'List.Item',
      item: tweets,
      collect: (monitor) => {
		console.log('monitor >>', monitor);  
		console.log('drag ref >>', dragRef);  
		console.log('drag item >>', dragItem);  
		return {
        opacity: monitor.isDragging() ? 0.5 : 1
      }}
    }),
    []
  );

//   const [collectedProps, drop] = useDrop(() => ({
//     accept: true
//   }));

  function dragstart_handler(ev) {
	  console.log('drag event started >>', ev);
	// Add the target element's id to the data transfer object
	ev.dataTransfer.setData("application/tweet-search", ev.target.id);
	ev.dataTransfer.effectAllowed = "move";
   }
   function dragover_handler(ev) {
	   console.log("attempted move >>");
	ev.preventDefault();
	ev.dataTransfer.dropEffect = "move";
	saveTweet(ev.target.id);
   }
   function drop_handler(ev) {
	ev.preventDefault();
	console.log('drop event fired >>', ev);
	// Get the id of the target and add the moved element to the target's DOM
	const data = ev.dataTransfer.getData("application/tweet-search");
	ev.target.appendChild(document.getElementById(data));
	saveTweet(ev.target.id);
   }

return (
	<>
	<div ref={dragRef} style={{ opacity }}>
		<List
			grid={{
			gutter: 16,
			xs: 1,
			sm: 2,
			md: 2,
			lg: 3,
			xl: 4,
			xxl: 4,
			}}
			dataSource={tweets}
			size="small"
			bordered={true}
			loading={isLoading}
			renderItem={item => (
			<div ref={dragRef} style={{ opacity }}>
			{/* <div id="drag-elements" draggable="true" ondragstart={dragstart_handler} onClick={() => saveTweet(item.id)}> */}
				<List.Item >

					<List.Item.Meta
					avatar={
					<Avatar src={item.user.profile_image_url} />
					}
					title={<a onClick={() => {
					setDragItem(item);
					saveTweet(item.id)}}>{item.text}</a>}
					// description="Ant Design, a design language for background applications, is refined by Ant UED Team"
				/>
				</List.Item>
			 </div>
			)}
		/>
		</div>
		<Divider plain type="horizontal"></Divider>

		{/* {!saved && <div ref={drop} id="drop-target" className="drop-zone" id="target" ondrop={() => drop_handler()} ondragover={() => dragover_handler()}>Drop Zone</div>}  */}

		<TweetModal
        	isModalVisible={isModalVisible}
        	transaction={details}
			handleOk={handleOk}
			handleCancel={handleCancel}
    	/>
	</>

);
}

export default Tweet;