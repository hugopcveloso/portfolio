import React from "react";
import Sidebar from "../components/Sidebar";
import BannerPhoto from "../images/hugo-newphoto.jpg";
import Navbar from "./Navbar";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion } from "framer-motion";

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
									Web Developer <br /> & Designer{" "}
									<span className="ponto-virgula">;</span>
								</h1>
								<p>
									Hey, my name is Hugo Veloso
									<span className="ponto-virgula">;</span>{" "}
								</p>
								<p>
									I'm a Full-Stack Javascript Developer{""}
									<span className="ponto-virgula">;</span>
								</p>
								<Link
									activeClass="active"
									className="cta-banner"
									to="portfolio-section"
									spy={true}
									smooth={true}
									offset={0}
									duration={800}
								>
									Portfolio
								</Link>
							</div>
							<div className="banner-photo col-md-12 col-lg-6">
								<motion.div
									className="gradient-square-motion-container"
									animate={{
										z: [0, 50, 0, 50, 0],
										x: [0, 0, -40, -40, 0],
										y: [-10, 40, 40, -10, -10],
										opacity: [0, 0.3, 0.5, 0.6, 0.3, 0.1],
									}}
									transition={{
										ease: "anticipate",
										repeat: Infinity,
										duration: 30,
									}}
								>
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
								</motion.div>
								<motion.img
									className="gradient-square-motion-container"
									animate={{
										z: [10, 0, 10, 10],
									}}
									transition={{ repeat: Infinity, duration: 6 }}
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
