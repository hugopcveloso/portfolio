import React from "react";
import WorkList from "../components/work-list";
import { useState } from "react";

const Portfolio = () => {
	const [portfolioType, setPorfolioType] = useState("work");
	return (
		<div className="section-container" id="portfolio-section">
			<h2 className="portfolio-title"> My Work </h2>
			<div id="work-list-container">
				<WorkList type={portfolioType} />
				{/* <ProjectList /> */}
			</div>
		</div>
	);
};

export default Portfolio;
