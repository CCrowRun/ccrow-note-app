import React from 'react';
import NoteCard from './NoteCard.js';

class List extends React.Component {
	componentWillMount() {
		this.props.getNotes();
	}

	render() {
		return (
			<div className="list-container">
				List Component
			</div>
		);
	}
}

export default List;