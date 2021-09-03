import React, { useState, useRef, useEffect } from 'react';
import { Select } from 'antd';
import useSearch from '../hooks/useSearch';


const { Option } = Select;

function TweetForm(props) {
	const {
		setSearch,
		search
	} = useSearch();


	const [input, setInput] = useState('');
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	})

	const handleChange = (e) => {
		setInput(e.target.value);
		setSearch(input);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// e.persist();

		props.onSubmit(search);
		setInput('');
	};

	return (
		<form className="tweet-form" onSubmit={handleSubmit}>
			<input type="text" placeholder=" Search for Tweet" value={input} name='text' className='tweet-input' onChange={handleChange} ref={inputRef}/>
			<button className="tweet-button"> Search! </button>
		</form>
	);
}

export default TweetForm;