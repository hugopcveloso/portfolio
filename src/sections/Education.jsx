import React from "react";
import styled from "styled-components";
import educationData from "../data/education-data";
import CarouselEducation from "../components/CarouselEducation";

const Education = () => {
	return (
		<Section>
			<List>
				{educationData.map((el) => {
					return (
						<Certificate key={el.id}>
							<img
								src={require(`../images/${el.image}`).default}
								alt={`${el.course_title} certificate`}
								className=""
							/>
							<div>
								<h3>{el.course_title}</h3>
								<p>{`From: ${el.from}`}</p>
								<p>
									<strong>{el.tech}</strong>
								</p>
								<p>{el.description}</p>
							</div>
						</Certificate>
					);
				})}
			</List>
		</Section>
	);
};

const Certificate = styled.div`
	text-align: left;
	p {
		color: black;
	}
	h3 {
		font-size: 25px;
	}
	img {
		width: ${(props) => (props.key === 1 ? "98%" : "100%")};
	}
	div {
		padding-top: ${(props) => (props.key === 1 ? "10px" : "0px")};

		padding-left: 10px;
		padding-right: 10px;
	}
	@media (max-width: 900px) {
	}
`;

const Section = styled.div`
	margin: 0 auto;
	width: 90%;
	height: auto;
`;

const List = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	column-gap: 30px;
	@media (max-width: 900px) {
		grid-template-columns: 1fr;
	}
`;

export default Education;
