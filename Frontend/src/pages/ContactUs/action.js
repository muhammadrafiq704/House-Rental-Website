import { HouseRentalAPI } from "@/api/HouseRental";

const action = async ({ request }) => {
	try {
		const requestedData = await request.json();
		switch (request.method) {
			case "POST": {
				const response = HouseRentalAPI.post("contact-us", requestedData);
				return {
					error: null,
					message: response.data.message,
				};
			}
			default:
				return {
					error: true,
					message: "Invalid Method",
				};
		}
	} catch (error) {
		return {
			error: true,
			message: error.response.data.message,
		};
	}
};
export default action;
