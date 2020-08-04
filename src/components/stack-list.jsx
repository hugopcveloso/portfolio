import React, { Component } from 'react';
import Tech from './tech';
import techList from '../data/stack-data';
// Acabar de fazer filtros para os respectivos stacks
class List extends Component {
	render() {
		const { filterStack } = this.props;

		const filteringArrays = (filter) => {
			if (filter.length === 0 || filter.length === 3) {
				return techList;
			}
			if (filter.length === 1) {
				return techList.filter((d) => d.tags.includes(filter[0]));
			}
			if (filter.length === 2 && filter.indexOf('Marketing') < 0) {
				return techList.filter((d) => !d.tags.includes('Marketing'));
			} else if (filter.length === 2 && filter.indexOf('Developer') < 0) {
				return techList.filter((d) => !d.tags.includes('Developer'));
			} else if (filter.length === 2 && filter.indexOf('Designer') < 0) {
				return techList.filter((d) => !d.tags.includes('Designer'));
			}
		};

		const stackList = filteringArrays(filterStack).map((tech) => <Tech tech={tech} key={tech.id} />);

		return <div className="stack-list"> {stackList} </div>;
	}
}

export default List;
