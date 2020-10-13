import React from 'react'
import WorkList from '../components/work-list'

const Portfolio = () => {
  return (
    <div>
      	<div className="section-container" id="portfolio-section" >
					<h2 className="portfolio-title"> My Work </h2>
					<div id="work-list-container">
						<WorkList />
					</div>
				</div>
    </div>
  )
}

export default Portfolio
