import React, { Component } from 'react';

class Button extends Component {
	state = { clicked: false };

	render() {
		const { stack, handleClick } = this.props;
		const highlight = () => {
			this.setState({
				clicked: !this.state.clicked
			});
		};
		return (
			<h5
				className={this.state.clicked ? 'active-button btn-stack' : 'btn-stack'}
				onClick={() => {
					handleClick(stack);
					highlight();
				}}
			>
				{stack}
			</h5>
		);
	}
}

export default Button;
