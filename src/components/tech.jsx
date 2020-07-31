import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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
			<CSSTransition in={toggleAppear} appear={true} timeout={1600} className="fade">
				<div className="tech-item" id={id}>
					<img src={url} alt="" className="tech-logo-image" />
					<h5 className="tech-name">{name}</h5>
				</div>
			</CSSTransition>
		);
	}
}

export default Tech;
