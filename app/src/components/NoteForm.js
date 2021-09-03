import React, { useState, useEffect, useRef } from 'react';

function NoteForm(props) {
	const [input, setInput] = useState('');
	const inputRef = useRef(null);

	useEffect(() => {
		inputRef.current.focus();
	})

	const handleChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// e.persist();

		props.onSubmit({
			id: Math.floor(Math.random() * 10000),
			text: input,
		});

		setInput('');
	};

	return (
		<form className="note-form" onSubmit={handleSubmit}>
			<input type="text" placeholder={ props.edit ? 'edit existing note!' : 'add a note!'} value={input} data-testid="add-note" name='text' className='note-input' onChange={handleChange} ref={inputRef}/>
			<button className="note-button"> { props.edit ? 'edit note!' : 'add note!'} </button>
		</form>
	);

}

export default NoteForm;