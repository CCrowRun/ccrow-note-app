import React from 'react';

class NoteCard extends React.Component {
	render() {
		const { note, getNote } = this.props;

		return(
			<div className="note-card-container">
				<div className="note-card-title">
					{note.title}
				</div>
				<div className="note-card-content">
					{note.content}
				</div>
				<span className="note-card-delete">
					<i className="material-icons">close</i>
				</span>
				<span className="note-card-edit" onClick={() => getNote(note.id)}>
					<i className="material-icons">mode_edit</i>
				</span>
			</div>
		);
	}
}

export default NoteCard;