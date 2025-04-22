import { HouseRentalAPI } from "@/api/HouseRental";

const action = async ({ request }) => {
	try {
		const requestedData = await request.json();
		switch (request.method) {
			case "POST": {
				const response = await HouseRentalAPI.post("/login", requestedData);
				return {
					error: null,
					message: response.data?.message,
					token: response.token,
				};
			}
			default:
				return {
					error: true,
					message: "Invalid method",
				};
		}
	} catch (error) {
		return {
			error: true,
			message: error.response?.data?.message,
		};
	}
};

export default action;
