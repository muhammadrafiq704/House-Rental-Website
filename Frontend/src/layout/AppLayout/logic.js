export const NameFormatter = (str) => {
	const sliced = str.split("/");
	return sliced[1].replace(/-/g, " ");
};
