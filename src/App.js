import React from 'react';
import logo from './logo.svg';
import './style/App.scss';

function App() {
	return (
		<div className="App">
			<div className="banner">
				<div className="banner-container">
					<header className="header-container">
						<h1>H</h1>
						<div className="nav-links">
							<a href="#personal-bio">About</a>
							<a href="#personal-bio">Skills</a>
							<a href="#personal-bio">Work</a>
							<a href="#personal-bio">Contactos</a>
						</div>
					</header>
					<div className="banner-content">
						<div className="banner-text-container">
							<h1>
								Web Developer <br /> &Marketing
							</h1>
							<p>
								Olá, o meu nome é Hugo Veloso, e crio soluções digitais para pequenas empresas, desde desenvolvimento de
								websites a marketing digital.
							</p>
							<button className="cta-banner">Portfolio</button>
						</div>
						<div className="banner-photo">
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
									<linearGradient id="paint0_linear" x1="247" y1="0" x2="247" y2="494" gradientUnits="userSpaceOnUse">
										<stop stop-color="#918E8E" />
										<stop offset="0.476389" stop-color="#BBBBBB" stop-opacity="0.57" />
										<stop offset="1" stop-color="white" stop-opacity="0" />
									</linearGradient>
								</defs>
							</svg>
							<img src="linkedinpic-min.jpg" alt="" className="photo" />
						</div>
					</div>
				</div>
			</div>

			<div className="section-container" id="personal-bio">
				<div className="blob-container">
					<img src="hugo_cut.png" alt="" className="mask" />

					<svg
						className="blob"
						width="632"
						height="662"
						viewBox="0 0 632 662"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M509.485 170.902C526.315 240.106 518.395 290.35 524.335 324.952C530.275 359.554 549.58 378.514 575.815 411.22C601.555 444.4 634.225 491.8 631.75 532.09C629.275 572.38 592.15 606.034 549.085 616.462C506.515 626.89 457.51 614.092 402.565 624.994C347.62 635.422 286.24 669.076 241.69 659.596C197.635 649.642 170.905 596.554 124.87 545.836C78.835 494.644 13.4951 445.822 2.11005 390.838C-8.77995 335.854 33.79 274.708 82.795 227.782C131.305 180.856 185.755 148.624 240.7 100.75C296.14 52.8759 352.57 -10.6401 401.575 1.68394C450.58 13.5339 492.655 101.698 509.485 170.902Z"
							fill="#FEF701"
						/>
					</svg>
				</div>
				<h3> Sobre mim </h3>
			</div>
			<div className="section-container" id="skills" />
			<div className="section-container"> </div>
		</div>
	);
}

export default App;
