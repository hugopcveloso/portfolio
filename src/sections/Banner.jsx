import React from "react";
import Sidebar from "../components/Sidebar";
import BannerPhoto from "../images/hugo-newphoto.jpg";
import Navbar from "./Navbar";

function Banner() {
	return (
		<div>
			<Navbar className="navbar-dark-color" />
			<div className="banner">
				<div className="banner-container">
					<div className="banner-wrapper">
						<div className="banner-content">
							<div className="banner-text-container col-md-12 col-lg-6">
								<h1>
									Web Developer <br /> &Designer
								</h1>
								<p>
									Hey, my name is Hugo Veloso, I'm a Full-Stack Javascript
									Developer and this is my Portfolio.
								</p>
								<a href="#portfolio-section" className="cta-banner">
									Portfolio
								</a>
							</div>
							<div className="banner-photo col-md-12 col-lg-6">
								<svg
									className="gradient-square"
									width="400"
									height="400"
									viewBox="0 0 400 400"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect width="400" height="400" fill="url(#paint0_linear)" />
									<defs>
										<linearGradient
											id="paint0_linear"
											x1="247"
											y1="0"
											x2="247"
											y2="494"
											gradientUnits="userSpaceOnUse"
										>
											<stop stopColor="#918E8E" />
											<stop
												offset="0.476389"
												stopColor="#BBBBBB"
												stopOpacity="0.57"
											/>
											<stop offset="1" stopColor="white" stopOpacity="0" />
										</linearGradient>
									</defs>
								</svg>
								<img
									src={BannerPhoto}
									width="100%"
									alt="asdf"
									className="photo"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Banner;
