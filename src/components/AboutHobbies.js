import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

const AboutHobbies = ({ expanded, setExpanded }) => {
	return (
		<>
			<button
				className={`about-button ${expanded ? "about-button-active" : ""}`}
				onClick={() => setExpanded(!expanded)}
			>
				When I'm not coding...
			</button>
			<AnimatePresence initial={true}>
				{expanded && (
					<motion.div
						initial="collapsed"
						animate="open"
						exit="collapsed"
						variants={{
							open: { opacity: 1, height: "auto" },
							collapsed: { opacity: 0, height: 0 },
						}}
						transition={{
							duration: 2,
							ease: [0.04, 0.25, 0.65, 0.98],
						}}
					>
						<p>
							When I'm not coding I play bass and guitar, I like to cook, and I
							used to skate a lot while growing up and even founded/worked at a
							skate school but now I only skate once every few weeks.
						</p>
						<p>
							I also enjoy watching movies, tv shows, and to read, watch videos
							or browse sub-reddits about philosophy, politics, technology,
							coding and media.{" "}
						</p>{" "}
						<p>
							{" "}
							I also really like to travel and international environments in
							general, I've studied abroad, did a few Interrail/hitchiking
							trips, and worked part-time in an Hostel
						</p>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default AboutHobbies;
