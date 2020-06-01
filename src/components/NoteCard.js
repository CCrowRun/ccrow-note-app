import React from 'react';

class NoteCard extends React.Component {
	render() {
		const { note } = this.props;

		return(
			<div className="note-card-container">
				<div className="note-card-title">
					{note.title}
				</div>
				<div className="note-card-content">
					{note.content}
				</div>
			</div>
		);
	}
}

export default NoteCard;