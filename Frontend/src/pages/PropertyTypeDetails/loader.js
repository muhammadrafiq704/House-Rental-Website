import { HouseRentalAPI } from "@/api/HouseRental";
import { defer } from "react-router-dom";

const loader = async ({ params }) => {
	try {
		console.log("params", params);
		const { id } = params;
		const properties_details = HouseRentalAPI.get(`properties/property/${id}`);

		return defer({
			properties_details: properties_details,
		});
	} catch (error) {
		return {
			error: true,
			message: error.response?.data?.message,
		};
	}
};

export default loader;
