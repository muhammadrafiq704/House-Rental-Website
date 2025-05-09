import Property from "../../Models/PropertyModel.js";

export const getSingleProperty = async (req, res) => {
	const { id } = req.params;
	try {
		const property = await Property.findById({
			_id: id,
		});

		if (!property) {
			return res.status(404).json({
				message: `No property found for id "${id}"`,
				data: property,
			});
		}

		res.status(200).json({
			message: `property of id "${id}" fetched successfully`,
			data: property,
		});
	} catch (error) {
		res.status(500).json({
			message: "Failed to fetch property",
			error: error.message,
		});
	}
};
