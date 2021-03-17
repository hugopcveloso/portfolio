import { current } from "immer";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import educationData from "../data/education-data";
import { motion, AnimatePresence } from "framer-motion";

const CarouselEducation = () => {
	const [current, setCurrent] = useState(0);
	const [auto, setAuto] = useState(true);
	const timerRef = useRef(null);

	useEffect(() => {
		if (timerRef.current) {
			clearTimeout(timerRef.current);
		}
		timerRef.current = setTimeout(() => {
			if (auto) {
				return () => move("next");
			}
		}, 5000);
		return () => clearTimeout(timerRef.current);
	}, [auto, current]);

	const move = (direction) => {
		const change = direction === "next" ? 1 : -1;
		if (current === 2 && direction === "next") {
			setCurrent(0);
		} else if (current === 0 && direction === "previous") {
			setCurrent(2);
		} else {
			setCurrent(current + 1 * change);
		}
	};
	console.log(current);
	return (
		<Section>
			<ButtonOverlay>
				<StyledButton onClick={() => move("previous")} previous>
					{" "}
					{`<`}{" "}
				</StyledButton>
				<StyledButton onClick={() => move("next")} next>
					{" "}
					{`>`}{" "}
				</StyledButton>
			</ButtonOverlay>
			<EducationSection>
				{educationData.map((el) => {
					if (current === el.id - 1) {
						return (
							<AnimatePresence>
								<motion.div
									initial={{ opacity: 0, x: 20 }}
									animate={{ opacity: 1, x: 0 }}
									exit={{ opacity: 0, x: -20 }}
								>
									<CardContainer current={current}>
										<img
											src={require(`../images/${el.image}`).default}
											alt={`${el.course_title} certificate`}
										/>
										<div>
											<h3>{el.course_title}</h3>
											<p>{`From: ${el.from}`}</p>
											<p>
												<strong>{el.tech}</strong>
											</p>
											<p>{el.description}</p>
										</div>
									</CardContainer>
								</motion.div>
							</AnimatePresence>
						);
					}
				})}
			</EducationSection>

			<div></div>
			<div></div>
		</Section>
	);
};

const Section = styled.div`
	display: flex;
	margin: 0 auto;
	height: auto;
`;

const ButtonOverlay = styled.div`
	position: relative;
	width: 100vw;
	height: 100%;
	position: absolute;
	display: flex;
`;
const StyledButton = styled.button`
	right: ${(props) => (props.next ? "0px" : "")};
	top: 0;
	bottom: 0;
	height: 100%;
	position: absolute;
	z-index: 10;
	width: 50%;
	background-color: transparent;
	border: none;
`;

const EducationSection = styled.div`
	display: flex;
	margin: 0 auto;
	height: auto;
`;

const CardContainer = styled.div`
	display: flex;
	img {
		width: 50%;
	}
	@media (max-width: 900px) {
		flex-wrap: wrap;
		width: 80vw;
		margin: 0 auto;
		img {
			width: 100%;
		}
	}
`;

export default CarouselEducation;
