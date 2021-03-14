import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Sidebar = (props) => {
	return (
		<div>
			<div
				onClick={props.closeSidebar}
				className={"sidebar-open" + " " + props.showSideNav}
			>
				<Link
					activeClass="active"
					className="sidebar-link"
					to="personal-bio"
					spy={true}
					smooth={true}
					offset={0}
					duration={500}
					onClick={props.closeSidebar}
				>
					{" "}
					Acerca
				</Link>
				<Link
					activeClass="active"
					className="sidebar-link"
					to="portfolio-section"
					spy={true}
					smooth={true}
					offset={0}
					duration={500}
					onClick={props.closeSidebar}
				>
					{" "}
					Work
				</Link>
				<Link
					activeClass="active"
					className="sidebar-link"
					to="tech-section"
					spy={true}
					smooth={true}
					offset={0}
					duration={800}
					onClick={props.closeSidebar}
				>
					{" "}
					Tech
				</Link>
				<Link
					activeClass="active"
					className="sidebar-link"
					to="contact-section"
					spy={true}
					smooth={true}
					offset={0}
					duration={900}
					onClick={props.closeSidebar}
				>
					{" "}
					Contactos
				</Link>
			</div>
		</div>
	);
};

export default Sidebar;
