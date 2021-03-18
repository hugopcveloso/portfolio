import { current } from "immer";
import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import educationData from "../data/education-data";
import { motion, AnimatePresence } from "framer-motion";
import { Carousel } from "react-bootstrap";

function CarouselEducation() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	const prevIcon = (
		<img
			className="carousel-icon  left-arrow"
			src={require(`../images/left-arrow.png`).default}
			alt="First slide"
		/>
	);

	const nextIcon = (
		<img
			className="carousel-icon right-arrow"
			src={require(`../images/right-arrow.png`).default}
			alt="First slide"
		/>
	);

	return (
		<StyledCarousel
			className="carousel-container"
			activeIndex={index}
			onSelect={handleSelect}
			prevIcon={prevIcon}
			nextIcon={nextIcon}
		>
			{educationData.map((course) => {
				return (
					<StyledCarousel.Item className="carousel-item">
						<img
							className="d-block w-100"
							src={require(`../images/${course.image}`).default}
							alt="First slide"
						/>
						<Carousel.Caption className="carousel-caption">
							<h3>{course.course_title}</h3>
							<p>
								<strong>{course.tech}</strong>
							</p>
							<p>{course.description}</p>
						</Carousel.Caption>
					</StyledCarousel.Item>
				);
			})}
		</StyledCarousel>
	);
}

export default CarouselEducation;

const StyledCarousel = styled(Carousel)`
	width: 80vw;

	margin: 0 auto;
	.carousel-container {
		overflow: visible;
		z-index: 10;
	}

	h3 {
		text-align: left;
	}
	p {
		color: black;
		text-align: left;
	}

	.carousel-caption {
		position: unset;
		margin-bottom: -40px;
		color: black;
	}
	.carousel-item {
		min-height: 600px;
	}
	.carousel-icon {
		height: 20px;
		z-index: 10;
		color: black;
	}
	.carousel-control-prev {
		margin-left: -50px;
		opacity: 1 !important;
	}
	.carousel-control-next {
		margin-right: -50px;
		opacity: 1 !important;
	}

	@media (max-width: 400px) {
		.carousel-control-prev {
			margin-left: -30px;
			opacity: 1 !important;
		}
		.carousel-control-next {
			margin-right: -30px;
			opacity: 1 !important;
		}
	}
`;

// const CarouselEducation = () => {
// 	const [current, setCurrent] = useState(0);
// 	const [auto, setAuto] = useState(true);
// 	const timerRef = useRef(null);

// 	useEffect(() => {
// 		if (timerRef.current) {
// 			clearTimeout(timerRef.current);
// 		}
// 		timerRef.current = setTimeout(() => {
// 			if (auto) {
// 				return () => move("next");
// 			}
// 		}, 5000);
// 		return () => clearTimeout(timerRef.current);
// 	}, [auto, current]);

// 	const move = (direction) => {
// 		const change = direction === "next" ? 1 : -1;
// 		if (current === 2 && direction === "next") {
// 			setCurrent(0);
// 		} else if (current === 0 && direction === "previous") {
// 			setCurrent(2);
// 		} else {
// 			setCurrent(current + 1 * change);
// 		}
// 	};

// 	return (
// 		<Section>
// 			<ButtonOverlay>
// 				<StyledButton onClick={() => move("previous")} previous>
// 					{" "}
// 					{`<`}{" "}
// 				</StyledButton>
// 				<StyledButton onClick={() => move("next")} next>
// 					{" "}
// 					{`>`}{" "}
// 				</StyledButton>
// 			</ButtonOverlay>
// 			<EducationSection>
// 				{educationData.map((el) => {
// 					if (current === el.id - 1) {
// 						return (
// 							<AnimatePresence key={el.id}>
// 								<motion.div
// 									initial={{ opacity: 0 }}
// 									animate={{ opacity: 1 }}
// 									exit={{ opacity: 0 }}
// 								>
// 									<CardContainer current={current}>
// 										<img
// 											src={require(`../images/${el.image}`).default}
// 											alt={`${el.course_title} certificate`}
// 										/>
// 										<div>
// 											<h3>{el.course_title}</h3>
// 											<p>{`From: ${el.from}`}</p>
// 											<p>
// 												<strong>{el.tech}</strong>
// 											</p>
// 											<p>{el.description}</p>
// 										</div>
// 									</CardContainer>
// 								</motion.div>
// 							</AnimatePresence>
// 						);
// 					}
// 				})}
// 			</EducationSection>
// 		</Section>
// 	);
// };

// const Section = styled.div`
// 	display: flex;
// 	margin: 0 auto;
// 	height: auto;
// `;

// const ButtonOverlay = styled.div`
// 	position: relative;
// 	width: 100vw;
// 	height: 100%;
// 	position: absolute;
// 	display: flex;
// `;
// const StyledButton = styled.button`
// 	right: ${(props) => (props.next ? "0px" : "")};
// 	top: 0;
// 	bottom: 0;
// 	height: 100%;
// 	position: absolute;
// 	z-index: 10;
// 	width: 50%;
// 	background-color: transparent;
// 	border: none;
// `;

// const EducationSection = styled.div`
// 	display: flex;
// 	margin: 0 auto;
// 	height: auto;
// `;

// const CardContainer = styled.div`
// 	display: flex;
// 	img {
// 		width: 50%;
// 	}
// 	@media (max-width: 900px) {
// 		flex-wrap: wrap;
// 		width: 80vw;
// 		margin: 0 auto;
// 		img {
// 			width: 100%;
// 		}
// 	}
// `;

// export default CarouselEducation;
