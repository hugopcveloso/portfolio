import React, { useState } from "react";
import "./style/App.scss";
import List from "./components/stack-list";
import Portfolio from "./sections/Portfolio";
import MyForm from "./components/form";
import About from "./sections/About";
import SidebarButton from "./components/SidebarButton";
import { Link, animateScroll as scroll } from "react-scroll";
import Banner from "./sections/Banner";
import Stack from "./sections/Stack";
import Services from "./sections/Services";
import Education from "./sections/Education";
import CarouselEducation from "./components/CarouselEducation";
import useWindowSize from "./utils/useWindowsSize";

const App = () => {
	const width = useWindowSize().width;
	return (
		<div className="App">
			<Banner className="banner-component-bg" />
			<About />
			<Portfolio />
			<Stack />
			{width > 900 && <Education />}
			{width < 900 && <CarouselEducation />}

			{/* <Services /> */}
			<div className="section-container" id="contact-section">
				<MyForm />
			</div>
		</div>
	);
};

export default App;
