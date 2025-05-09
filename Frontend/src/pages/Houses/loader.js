import { HouseRentalAPI } from "@/api/HouseRental";
import { defer } from "react-router-dom";

const loader = async ({ params }) => {
	try {
		const { type } = params;
		const propertyByTypes = HouseRentalAPI.get(`properties/${type}`);

		return defer({
			properties: propertyByTypes,
		});
	} catch (error) {
		return {
			error: true,
			message: error.response?.data?.message,
		};
	}
};

export default loader;
