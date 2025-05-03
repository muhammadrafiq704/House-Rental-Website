import { HouseRentalAPI } from "@/api/HouseRental";
import { defer } from "react-router-dom";

const loader = async () => {
	try {
		const blogs_details = HouseRentalAPI.get("blogs");
		return defer({
			blogs_details,
		});
	} catch (error) {
		return {
			error: true,
			message: error.response?.data?.message,
		};
	}
};

export default loader;
