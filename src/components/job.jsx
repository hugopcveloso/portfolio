import React, { Component } from 'react';

class Tech extends Component {
	render() {
		const { name, url, id } = this.props.tech;

		return (
			<div className="tech-item fade-in" id={id}>
				<img src={url} alt="" className="tech-logo-image" />
				<h5 className="tech-name">{name}</h5>
			</div>
		);
	}
}

export default Tech;
