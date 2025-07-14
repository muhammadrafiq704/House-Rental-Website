import { HouseRentalAPI } from "@/api/HouseRental";
import { defer } from "react-router-dom";

const loader = async () => {
	try {
		const blogs = HouseRentalAPI.get("properties");
		return defer({
			blogs,
		});
	} catch (error) {
		return {
			error: true,
			message: error.response?.data?.message,
		};
	}
};

export default loader;
