import React, { useState } from 'react';
import altSolutionsPhoto from '../../src/images/altsolutions-screen.jpg';
import efeitoContextoPhoto from '../../src/images/efeito-contexto-screen.jpg';
import hostRoulettePhoto from '../../src/images/hostroulette-screen.jpg';
import comportaAppPhoto from '../../src/images/screen-comportaapp.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp} from '@fortawesome/free-solid-svg-icons';

const Job = (props) => {
	const [collapsed, setCollapsed] = useState(true)
	const jobImages = [ altSolutionsPhoto, hostRoulettePhoto, efeitoContextoPhoto, comportaAppPhoto ];
  const { name, url, id, description, technologies } =  props.job;
	const handleCollapse = () => {
		setCollapsed(!collapsed)
	}


	return (
  		<div className='job-container' id={id}>
 				<img src={jobImages[id - 1]} alt="image not loading" className="job-image" />
 				<div className="job-content-container">
					<div className="job-header" onClick={handleCollapse} >
						<h3 className="job-name" >
							{name}
						</h3>
						<FontAwesomeIcon icon={collapsed ? faCaretDown : faCaretUp} className="arrow-collapse" onClick={handleCollapse} />
					</div>
					<p className="job-technologies"> {technologies} </p>

					<div className={`job-collapsed ${collapsed ? 'display-none' : 'display-show'}`}>
						<p className="job-description">{description}</p>
						
						<a href={url} target="_blank" className=" site-button">
							{' '}
							Visitar{' '}
						</a>
					</div>
					<br/>
 				</div>
 			</div>
   );
}

export default Job


// class Job extends Component {
// 	render() {
// 		const jobImages = [ altSolutionsPhoto, hostRoulettePhoto, efeitoContextoPhoto, comportaAppPhoto ];
// 		const { name, url, id, description, technologies } = this.props.job;
// 		return (
// 			<div className={isEven} id={id}>
// 				<img src={jobImages[id - 1]} alt="image not loading" className="job-image" />
// 				<div className="job-content-container">
// 					<a className="job-name" href={url}>
// 						{name}
// 					</a>
// 					<p className="job-description">{description}</p>
// 					<p className="job-technologies"> {technologies} </p>
// 					<a href={url} target="_blank" className=" site-button">
// 						{' '}
// 						Visitar{' '}
// 					</a>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// export default Job;
