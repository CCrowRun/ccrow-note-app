import React from 'react';

class Flash extends React.Component {
	render() {
		const { error } = this.props;
		return (
			<div className="flash-container">
				{error}
			</div>
		);
	}
}

export default Flash;