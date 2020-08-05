import React, { Component } from 'react';

class Sidebar extends Component {
	render() {
		const { toggleSideNav } = this.props;

		return (
			<div onMouseLeave={this.closeSidebar} className={'sidebar-open' + ' ' + this.state.showsidenav}>
				<a href="#personal-bio">About</a>
				<a href="#tech-section">Skills</a>
				<a href="#portfolio-section">Work</a>
				<a href="#contact-section">Contactos</a>
			</div>
		);
	}
}

export default Sidebar;
