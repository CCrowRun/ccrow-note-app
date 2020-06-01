import React from 'react';

class Note extends React.Component {
	render() {
		const { note } = this.props;

		return (
			<div className="note-container">
				<form className="note-form">
					<input 
						className="note-title-input" 
						type="text" 
						placeholder="Note Title..." 
						defaultValue={note.title} 
					/>
					<textarea 
						className="note-textarea" 
						placeholder="Type here..." 
						defaultValue={note.content} 
					/>
					<input className="note-button" type="submit" value="Submit" />
				</form>
			</div>
		);
	}
}

export default Note;