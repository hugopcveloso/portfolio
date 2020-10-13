import React, { useState } from 'react';


const Button = (props) => {
	const [clicked, setClicked] = useState(false)

		const highlight =  () => {
			setClicked(!clicked)
		};
		return (
			<h5
				className={clicked? 'active-button btn-stack' : 'btn-stack'}
				// onClick={highlight}
			>
				{props.stack}
			</h5>
		);
}

// class Button extends Component {
// 	state = { clicked: false };

// 	render() {
// 		const { stack, handleClick } = this.props;
// 		const highlight = () => {
// 			this.setState({
// 				clicked: !this.state.clicked
// 			});
// 		};
// 		return (
// 			<h5
// 				className={this.state.clicked ? 'active-button btn-stack' : 'btn-stack'}
// 				onClick={() => {
// 					handleClick(stack);
// 					highlight();
// 				}}
// 			>
// 				{stack}
// 			</h5>
// 		);
// 	}
// }

export default Button;
