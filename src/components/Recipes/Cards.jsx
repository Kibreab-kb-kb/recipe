import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import PaperCard from "./PaperCard";
import { motion, AnimatePresence } from "framer-motion";
import { stringParse } from "../../utils/api";
import { Link } from "react-router-dom";

const Cards = ({ state }) => {
	const [selectedId, setSelectedId] = useState(null);
	let label = "";
	let img = "";
	let yields = "";

	useEffect(() => {}, [state]);

	return (
		<Box
			sx={{
				width: "100%",
				margin: "0 auto",
			}}
		>
			<Box
				mt={4}
				component={motion.div}
				layout
				sx={{
					overflow: "hidden",
					padding: "40px",
					display: "grid",
					gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
					gridRowGap: "20px",
				}}
			>
				{state.filtered?.map((recipe, i) => {
					label = recipe.recipe.label;
					img = recipe.recipe.image;
					yields = recipe.recipe.yield;

					return (
						<Box
							component={motion.div}
							initial={{
								y: "30vh",
								opacity: 0,
							}}
							whileInView={{
								y: 0,
								opacity: 1,
							}}
							transition={{
								duration: 0.5,
								delay: (i % 4) * 0.1,
							}}
							key={stringParse(recipe.recipe.uri)}
							layoutId={stringParse(recipe.recipe.uri)}
							onClick={() => setSelectedId(stringParse(recipe.recipe.uri))}
						>
							<Link to={`${stringParse(recipe.recipe.uri)}`}>
								<PaperCard label={label} img={img} yields={yields} />
							</Link>
						</Box>
					);
				})}
			</Box>
		</Box>
	);
};

export default Cards;
