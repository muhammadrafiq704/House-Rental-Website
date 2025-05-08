import Property from "../../Models/PropertyModel.js";

export const createProperty = async (req, res) => {
	try {
		const { property_type, desc, location, price, final_price, message } =
			req.body;

		const files = req.files?.map((file) => file.filename) || [];

		const newProperty = new Property({
			property_type,
			desc,
			location,
			price,
			final_price,
			message,
			file: files,
		});

		const saved = await newProperty.save();

		res
			.status(201)
			.json({ message: "Property listed successfully", data: saved });
	} catch (error) {
		console.error("Error in createProperty:", error);
		res
			.status(500)
			.json({ message: "Failed to create property", error: error.message });
	}
};
