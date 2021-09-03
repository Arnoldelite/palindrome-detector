import React, { useState } from 'react';
import NoteForm from './NoteForm';
import Note from './Note'

function NoteList() {
	const [notes, setNotes] = useState([]);

	const addNote = (note) => {

		if (!note.text || note.text === ' ' || /^\$*$/.test(note.text)) {
			return;
		}


		const newnotes = [note, ...notes];
		setNotes(newnotes);
	}

	const updateNote = (noteId, newValue) => {
		if (!newValue.text || newValue.text === ' ' || /^\$*$/.test(newValue.text)) {
			return;
		}

		setNotes(prev => prev.map(item => (item.id === noteId ? newValue : item)));
	}

	const removeNote = (id) => {
		const removeArr = [...notes].filter((note) => note.id !== id);
		setNotes(removeArr);
	}

	const completeNote = (id) => {
		const updatednotes = notes.map(note => {
			if (note.id === id) {
				note.isComplete = !note.isComplete;
			}
			return note;
		});
		setNotes(updatednotes);
	}

	return (
		<div>
			<div className="note-header">
			<div className="note-title">
			<h1> plan for the day ?</h1>
			</div>
			<NoteForm onSubmit={addNote}/>
			</div>
			<Note notes={notes} completeNote={completeNote} removeNote={removeNote} updateNote={updateNote}/>
		</div>
	)

}

export default NoteList;
