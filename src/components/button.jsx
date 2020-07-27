import React, { Component } from 'react';

class Button extends Component {
	state = { clicked: false };
	render() {
		const { stack, handleClick } = this.props;

		return (
			<h3 className={this.state.clicked ? 'clicked' : ''} onClick={handleClick}>
				{stack}
			</h3>
		);
	}
}

export default Button;
