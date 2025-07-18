import { HouseRentalAPI } from "@/api/HouseRental";

const action = async ({ request }) => {
	try {
		const requestedData = await request.formData();
		switch (request.method) {
			case "POST": {
				const response = await HouseRentalAPI.post(
					"auth/register",
					requestedData,
				);
				console.log("response", response);
				return {
					error: null,
					message: response.data?.message,
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
