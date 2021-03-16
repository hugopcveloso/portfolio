import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fab);

const Socials = () => {
	return (
		<div className="social-container">
			<h4 className="form-title">Follow me on social media</h4>
			<div className="social-links">
				<a
					href="https://www.linkedin.com/in/hugo-veloso"
					className="social-link"
					id="linkedin-link"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon
						className="social-icons"
						id="linkedin-icon"
						icon={["fab", "linkedin"]}
						size="lg"
					/>
					Linkedin
				</a>{" "}
				<br />
				<br />
				<a
					href="https://github.com/hugopcveloso"
					className="social-link"
					id="github-link"
					target="_blank"
					rel="noreferrer"
				>
					<FontAwesomeIcon
						className="social-icons"
						id="github-icon"
						icon={["fab", "github"]}
						size="lg"
					/>
					Github
				</a>
			</div>
		</div>
	);
};

export default Socials;
