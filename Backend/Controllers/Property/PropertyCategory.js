import Property from "../../Models/PropertyModel.js";

export const getPropertyTypes = async (req, res) => {
	const { type } = req.params;

	const normalizedType = type.toLowerCase();

	try {
		const properties = await Property.find({
			property_type: { $regex: new RegExp(`^${normalizedType}$`, "i") },
		});

		if (!properties || properties.length === 0) {
			return res.status(404).json({
				message: `No properties found for type "${normalizedType}"`,
				data: properties,
			});
		}

		res.status(200).json({
			message: `Properties of type "${normalizedType}" fetched successfully`,
			data: properties,
		});
	} catch (error) {
		res.status(500).json({
			message: "Failed to fetch properties",
			error: error.message,
		});
	}
};
