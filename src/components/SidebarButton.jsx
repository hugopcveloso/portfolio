import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const SidebarButton = ({ toggleSideNav }) => {
	return (
		<FontAwesomeIcon
			icon={faBars}
			className="burguer-menu"
			onClick={() => toggleSideNav()}
		/>
	);
};

export default SidebarButton;
