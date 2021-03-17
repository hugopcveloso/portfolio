import React, { useState } from "react";
import myPhoto from "../images/hugo-glasses-color.jpg";
import aboutData from "../data/about-data";
import AboutHobbies from "../components/AboutHobbies";

const About = () => {
	const [expanded, setExpanded] = useState(false);

	return (
		<div>
			<div className="section-container " id="personal-bio">
				<div className="about-wrapper">
					<div className="blob-container col-sm-12 col-lg-6">
						<svg
							className="blob-svg"
							width="100%"
							height="100%"
							viewBox="300 400 1000 1000"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
						>
							<mask
								id="mask0"
								mask-type="alpha"
								maskUnits="userSpaceOnUse"
								x="309"
								y="395"
								width="1000"
								height="1200"
							>
								<path
									d="M1130.22 564.016C1194.19 646.346 1235.91 707.527 1234.98 765.687C1234.06 824.602 1188.63 879.741 1189.56 968.113C1189.56 1057.24 1235.91 1179.6 1195.12 1250.6C1154.33 1322.36 1025.46 1343.51 911.421 1328.4C796.459 1313.3 695.403 1261.18 587.857 1206.79C480.312 1153.17 366.276 1097.27 326.41 1016.45C285.617 935.634 318.993 830.645 400.58 772.485C481.239 715.081 611.035 704.506 701.893 628.974C792.75 554.197 844.669 415.218 913.275 397.09C981.882 378.963 1066.25 482.442 1130.22 564.016Z"
									fill="#FEF701"
									id="blob-path"
								/>
							</mask>
							<g mask="url(#mask0)">
								<rect
									x="186"
									y="307"
									width="1355"
									height="1355"
									fill="url(#pattern0)"
									overflow="hidden"
								/>
							</g>
							<defs>
								<pattern
									id="pattern0"
									patternContentUnits="objectBoundingBox"
									width="1"
									height="1"
								>
									<use
										xlinkHref="#photo-in-blob"
										transform="scale(0.00111607)"
									/>
								</pattern>
								<image
									id="photo-in-blob"
									width="896"
									height="896"
									href={myPhoto}
								/>
							</defs>
						</svg>
					</div>
					<div className="about-container col-sm-12 col-lg-6">
						<div className="about-title">
							<h2> About me </h2>
							<div className="small-rectangle"> </div>
							<div className="small-ellipsis"> </div>
						</div>
						<div className="about-text">
							<p>
								{" "}
								I've had an interest on the Internet, its potential, its
								community aspect and even its absurdity for as long as I can
								remember. This interest led me to freelance (part-time) in most
								areas related to creating and maintaining web projects, from CMS
								Development and the Design, Video and Digital Marketing that
								come with it until I finally decided to make the jump to
								Full-Stack Web Development through an Intensive Coding Bootcamp.
							</p>
							<strong>
								In 2020 I joined the LeWagon Coding Bootcamp in Lisbon based on
								Ruby on Rails and Vanilla Javascript and I immediately enjoyed
								the process of coding.{" "}
							</strong>{" "}
							Right after the Bootcamp while coding my own projects, I quickly
							learned the importance of Javascript for User Experience, which
							led me to learn React through online courses.
							<p>
								The amazing ecosystem with creative new solutions coming up
								everyday in the Javascript world made me decide to jump into
								Nodejs aswell, so I took a very complete Nodejs Course.
							</p>
							<p>
								<strong>
									I feel I'm now ready to start a professional journey as a
									Javascript Developer using React/Nextjs and Nodejs.{" "}
								</strong>
							</p>
							<br />
							<AboutHobbies expanded={expanded} setExpanded={setExpanded} />
							{/* <button
								className="about-button"
								onClick={() => setShowHobbies(!showHobbies)}
							>
								{" "}
								When I'm not coding...{" "}
							</button>
							<AnimatePresence initial={true}>
								{showHobbies && (
									<motion.div
										animate="open"
										exit="collapsed"
										variants={{
											open: { opacity: 1, height: "auto" },
											collapsed: { opacity: 0, height: 0 },
										}}
										transition={{
											duration: 0.8,
											ease: [0.04, 0.62, 0.23, 0.98],
										}}
									>
								<AboutHobbies expanded={collapsed} setExpanded={setCollapsed}/>

										<p>
											When I'm not coding I play bass and guitar, I like to
											cook, and I used to skate a lot while growing up and even
											taught kids to skate but now I only go once every few
											weeks.
											<p>
												I also like to watch movies and tv shows, but I always
												try to be intentional with the media I consume, so I
												make a conscious effort to only watch interesting movies
												and TV shows and to read, watch videos or even browse
												sub-reddits about philosophy, politics, technology and
												media.{" "}
											</p>{" "}
											I also really like to travel and international
											environments in general, I've studied abroad, did a few
											Interrail/hitchiking trips, and worked part-time in an
											Hostel
										</p>
									</motion.div>
								)}
							</AnimatePresence> */}
							{/* <p>
								Sempre tive um grande interesse na internet e no seu potencial
								para criar e divulgar projectos e ideias. Este interesse{" "}
								<strong>
									{" "}
									motivou-me a aprender todas as áreas necessárias para a
									criação e manutenção de projectos digitais,
								</strong>{" "}
								e fui assim começando a trabalhar como freelancer em CMS
								Development, design e marketing digital.
								<br /> Em 2020 decidi fazer um curso de "Full Stack Web
								Developer" no LeWagon Coding Bootcamp, em Lisboa, e tenho-me
								focado em programação desde então. <br />
								<strong>
									Programo maioritariamente em Ruby on Rails e React, mas
									dependendo das necessidades do cliente trabalho também com
									Wordpress e Wix. Tenho também experiência com marketing
									digital (SEO, SEM, e gestão de redes sociais incluindo
									produção de videos e design gráfico).
								</strong>{" "}
								No meu tempo livre ando de skate, viajo, toco guitarra, vejo
								filmes e séries e estudo media, tecnologia e marketing.
							</p> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
