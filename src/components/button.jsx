import React, { Component } from 'react';

class Button extends Component {
	state = { clicked: false };

	render() {
		const { stack, handleClick } = this.props;

		return <h5 onClick={handleClick}>{stack}</h5>;
	}
}

export default Button;
