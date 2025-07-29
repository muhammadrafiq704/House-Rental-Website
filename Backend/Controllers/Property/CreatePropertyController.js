import Property from "../../Models/PropertyModel.js";
import uploadFile from "../../config/cloundinary.js";

export const createProperty = async (req, res) => {
	try {
		const registeredData = req.body;
		const files = req.files;

		if (!files || files.length === 0) {
			return res.status(400).json({ message: "No files uploaded" });
		}

		// Upload to cloud and collect URLs
		const uploadedUrls = [];

		for (const file of files) {
			const upload = await uploadFile(file.path); // cloudinary upload

			uploadedUrls.push(upload.secure_url);
		}

		const newProperty = new Property({
			...registeredData,
			file: uploadedUrls, // store all uploaded image URLs
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
