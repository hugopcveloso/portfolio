import React, { Component } from "react";
import Job from "./job";
import workData from "../data/work-data";
// Acabar de fazer filtros para os respectivos stacks

const WorkList = ({ type }) => {
	// return workData.map((job) => <Job job={job} />);
	const workList = workData.map((job) => <Job job={job} key={job.id} />);
	// const projectList = projectData.map((proj) => (
	// 	<Job job={proj} key={job.id} />
	// ));
	return <div className="work-list"> {workList} </div>;
};

export default WorkList;
