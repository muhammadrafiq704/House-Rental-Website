import { HouseRentalAPI } from "@/api/HouseRental";

const action = async ({ request }) => {
	try {
		switch (request.method) {
			case "POST": {
				const registeredData = await request.formData();
				const file = registeredData.get("file");
				console.log(file);
				const response = await HouseRentalAPI.post(
					"properties/",
					registeredData,
					{
						withCredentials: true,
					},
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
