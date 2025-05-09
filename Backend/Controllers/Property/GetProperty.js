import Property from "../../Models/PropertyModel.js";

export const getProperties = async (req, res) => {
	try {
		const properties = await Property.find();

		if (properties.length === 0) {
			return res
				.status(404)
				.json({ message: "No properties found", data: properties });
		}

		res.status(200).json({ message: "Properties fetched", data: properties });
	} catch (error) {
		res
			.status(500)
			.json({ message: "Failed to fetch properties", error: error.message });
	}
};
