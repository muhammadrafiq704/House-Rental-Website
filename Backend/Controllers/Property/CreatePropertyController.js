import Property from "../../Models/PropertyModel.js";

export const createProperty = async (req, res) => {
	try {
		const registeredData = req.body;
		const files = req.files?.map((file) => file.filename) || [];

		const newProperty = new Property({
			...registeredData,
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
