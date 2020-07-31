import React, { Component } from 'react';
import Tech from './tech';
import workList from '../data/work-data';
// Acabar de fazer filtros para os respectivos stacks
class WorkList extends Component {
	render() {
		return workList.map((tech) => <Tech tech={tech} />);
	}
}

export default WorkList;
