import React, { Component } from 'react';
import Tech from './tech';

const techList = [
	{
		id: 1,
		name: 'HTML',
		url: 'https://cdn.worldvectorlogo.com/logos/html5.svg'
	},
	{
		id: 2,
		name: 'Javascript',
		url: 'https://cdn.worldvectorlogo.com/logos/javascript.svg'
	},
	{
		id: 3,
		name: 'CSS',
		url: 'https://cdn.worldvectorlogo.com/logos/css-5.svg'
	},
	{
		id: 4,
		name: 'Ruby',
		url: 'https://cdn.worldvectorlogo.com/logos/ruby.svg'
	},
	{
		id: 5,
		name: 'Rails',
		url: 'https://cdn.worldvectorlogo.com/logos/rails.svg'
	},
	{
		id: 6,
		name: 'Github',
		url: 'https://cdn.worldvectorlogo.com/logos/github-1.svg'
	},
	{
		id: 7,
		name: 'Wordpress',
		url: 'https://cdn.worldvectorlogo.com/logos/wordpress-blue.svg'
	},
	{}
];

class Hello extends Component {
	state = { clicked: false };
	stackList = techList;

	render() {
		const stackList = techList.map((tech) => <Tech tech={tech} />);
		return <div className="stack-list"> {stackList} </div>;
	}
}

export default Hello;
