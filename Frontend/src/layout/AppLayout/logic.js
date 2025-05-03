export const NameFormatter = (str) => {
	const sliced = str.split("/");
	console.log("sliced", sliced);
	return sliced[1].replace(/-/g, " ");
};
