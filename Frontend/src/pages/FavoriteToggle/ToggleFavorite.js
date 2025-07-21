import { HouseRentalAPI } from "@/api/HouseRental";
import { toast } from "react-toastify";

const ToggleFavorite = async (userId, propertyId, isFavorite) => {
	try {
		const response = await HouseRentalAPI.post(
			"profile-dashboard/favorite-toggle",
			{
				propertyId,
				userId,
				isFavorite,
			},
		);
		response.status === 200
			? toast.warning(`${response.data.message}`)
			: toast.success(response.data.message);
		return response.data;
	} catch (error) {
		console.error("Error toggling favorite", error);
		throw error;
	}
};

export default ToggleFavorite;
