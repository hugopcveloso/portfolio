import React, { Component } from 'react';
import altSolutionsPhoto from '../../src/images/altsolutions-screen.jpg';
import efeitoContextoPhoto from '../../src/images/efeito-contexto-screen.jpg';
import hostRoulettePhoto from '../../src/images/hostroulette-screen.jpg';
import comportaAppPhoto from '../../src/images/altsolutions-screen.jpg';

class Job extends Component {
	render() {
		const jobImages = [ altSolutionsPhoto, hostRoulettePhoto, efeitoContextoPhoto, comportaAppPhoto ];

		const { name, url, id, description, technologies } = this.props.job;
		const isEven = id % 2 === 0 ? 'job-container job-even' : 'job-container job-odd';
		return (
			<div className={isEven} id={id}>
				<img src={jobImages[id - 1]} alt="image not loading" className="job-image" />
				<div className="job-content-container">
					<a className="job-name" href={url}>
						{name}
					</a>
					<p className="job-description">{description}</p>
					<p className="job-technologies"> {technologies} </p>
					<a href={url} target="_blank" className=" site-button">
						{' '}
						Visitar{' '}
					</a>
				</div>
			</div>
		);
	}
}

export default Job;
