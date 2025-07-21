import { HouseRentalAPI } from "@/api/HouseRental";

const action = async ({ request }) => {
	try {
		switch (request.method) {
			case "PUT": {
				const registeredData = await request.json();
				const response = await HouseRentalAPI.put(
					"profile-dashboard/update-email",
					registeredData,
				);
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
