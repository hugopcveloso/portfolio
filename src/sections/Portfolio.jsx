import React from "react";
import WorkList from "../components/work-list";
import { useState, useRef } from "react";
const Portfolio = () => {
	return (
		<div className="section-container" id="portfolio-section">
			<h2 className="portfolio-title"> My Work </h2>
			<div id="work-list-container">
				<WorkList />

				{/* <ProjectList /> */}
			</div>
		</div>
	);
};

export default Portfolio;
