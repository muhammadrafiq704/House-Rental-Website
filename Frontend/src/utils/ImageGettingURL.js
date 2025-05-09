export const ImageGettingURL = (items) => {
	const URL = "http://localhost:8000/uploads";
	return `${URL}/${items}`;
};
