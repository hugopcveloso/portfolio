import React, { Component } from 'react';
// import logo from './logo.svg';
import './style/App.scss';
import List from './components/stack-list';
import Button from './components/button';

class App extends Component {
	state = { filterStack: [] };
	handleClick = (stack) => {
		const clicked = stack;
		const stackIndex = this.state.filterStack.indexOf(clicked);
		let stackArray = this.state.filterStack;
		if (stackIndex < 0) {
			stackArray.push(clicked);
		} else {
			stackArray.splice(stackIndex, 1);
		}
		this.setState({ filterStack: stackArray });
	};

	render() {
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
							<div className="banner-text-container col-md-12 col-lg-6">
								<h1>
									Web Developer <br /> &Marketing
								</h1>
								<p>
									Olá, o meu nome é Hugo Veloso, e crio soluções digitais para pequenas empresas, desde desenvolvimento
									de websites a marketing digital.
								</p>
								<button className="cta-banner">Portfolio</button>
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
										<linearGradient id="paint0_linear" x1="247" y1="0" x2="247" y2="494" gradientUnits="userSpaceOnUse">
											<stop stop-color="#918E8E" />
											<stop offset="0.476389" stop-color="#BBBBBB" stop-opacity="0.57" />
											<stop offset="1" stop-color="white" stop-opacity="0" />
										</linearGradient>
									</defs>
								</svg>
								<img src={require('./images/linkedinpic-min.jpg')} width="100%" alt="asdf" className="photo" />
							</div>
						</div>
					</div>
				</div>

				<div className="section-container " id="personal-bio">
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
							<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="309" y="395" width="1000" height="1200">
								<path
									d="M1130.22 564.016C1194.19 646.346 1235.91 707.527 1234.98 765.687C1234.06 824.602 1188.63 879.741 1189.56 968.113C1189.56 1057.24 1235.91 1179.6 1195.12 1250.6C1154.33 1322.36 1025.46 1343.51 911.421 1328.4C796.459 1313.3 695.403 1261.18 587.857 1206.79C480.312 1153.17 366.276 1097.27 326.41 1016.45C285.617 935.634 318.993 830.645 400.58 772.485C481.239 715.081 611.035 704.506 701.893 628.974C792.75 554.197 844.669 415.218 913.275 397.09C981.882 378.963 1066.25 482.442 1130.22 564.016Z"
									fill="#FEF701"
									id="blob-path"
								/>
							</mask>
							<g mask="url(#mask0)">
								<rect x="186" y="307" width="1355" height="1355" fill="url(#pattern0)" overflow="hidden" />
							</g>
							<defs>
								<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
									<use xlinkHref="#photo-in-blob" transform="scale(0.00111607)" />
								</pattern>
								<image id="photo-in-blob" width="896" height="896" href={require('./images/hugo_cut.png')} />
							</defs>
						</svg>
					</div>
					<div className="about-container col-sm-12 col-lg-6">
						<div className="about-title">
							<h2> Sobre mim </h2>
							<div className="small-rectangle"> </div>
							<div className="small-ellipsis"> </div>
						</div>
						<div className="about-text">
							<p>
								Programo maioritariamente em Ruby e Ruby on Rails, e dependendo das necessidades do cliente trabalho com
								wordpress e wix.Tenho também experiência com marketing digital, (SEO, SEM, e gestão de redes sociais
								incluindo produção de videos simples e design). Tenho um grande interesse na internet e em entender
								todos os componentes necessárias para criar um projecto digital. Estudei Web Development no LeWagon
								Bootcamp em Lisboa e tenho trabalhado como freelancer desde então. No meu tempo livre ando de skate,
								toco música e estudo media, tecnologia e marketing.
							</p>
						</div>
					</div>
				</div>
				<div className="section-container" id="tech-section">
					<div className="skills-title">
						<h2> Tech Stack </h2>
					</div>
					<div className="skills-navbar">
						<Button stack="Developer" handleClick={this.handleClick} />
						<Button stack="Designer" handleClick={this.handleClick} />
						<Button stack="Marketing" handleClick={this.handleClick} />
					</div>
					<List name="Hugo" filterStack={this.state.filterStack} />
				</div>
				<div className="section-container" id="portfolio-section">
					<h2> My Work </h2>
					<div className="work-container">
						<h3> Title of job</h3>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
