import React, { Component } from 'react';

class Tech extends Component {
	state = { appearTech: false };

	render() {
		const { name, url, id } = this.props.tech;
		const toggleAppear = () => {
			this.setState({
				appearTech: this.state.appearTech
			});
		};
		return (
			<div className="tech-item" id={id}>
				<img src={url} alt="" className="tech-logo-image" />
				<h5 className="tech-name">{name}</h5>
			</div>
		);
	}
}

export default Tech;
