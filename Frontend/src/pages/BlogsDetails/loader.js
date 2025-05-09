import { HouseRentalAPI } from "@/api/HouseRental";
import { defer } from "react-router-dom";

const loader = async ({ params }) => {
	try {
		console.log("params", params);
		const id = params.id;
		const blogs_details = HouseRentalAPI.get(`blogs/${id}`);
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
