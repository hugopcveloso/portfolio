import React, { Component } from 'react';
import Job from './job';
import workData from '../data/work-data';
// Acabar de fazer filtros para os respectivos stacks
class WorkList extends Component {
	render() {
		// return workData.map((job) => <Job job={job} />);

		const workList = workData.map((job) => <Job job={job} key={job.id} />);

		return <div className="work-list"> {workList} </div>;
	}
}

export default WorkList;
