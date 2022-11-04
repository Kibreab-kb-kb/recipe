export const ImageVariant = {
	initial: {
		x: 800,
		rotate: 185,
	},
	then: {
		x: 0,
		rotate: 0,
		transition: {
			duration: 1.25,
			type: "spring",
			bounce: 0.5,
		},
	},
};

export const GridVariant = {
	initial: {
		x: "-100vw",
	},
	then: {
		x: 0,
		transition: {
			duration: 1,
			staggerChildren: 0.1,
			type: "spring",
			bounce: 0.5,
		},
	},
};

export const ItemVariant = {
	initial: {
		x: "-100vw",
	},
	then: {
		x: 0,
		transition: {
			duration: 1,
			type: "spring",
		},
	},
};
