import { HouseRentalAPI } from "@/api/HouseRental";
import { defer } from "react-router-dom";

const loader = async ({ params }) => {
	try {
		const userId = params.userId;

		const favorites = HouseRentalAPI.get(`profile-dashboard/${userId}`);
		return defer({
			favorites,
		});
	} catch (error) {
		return {
			error: true,
			message: error.response?.data?.message,
		};
	}
};

export default loader;
