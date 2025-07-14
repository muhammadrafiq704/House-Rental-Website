import dotenv from "dotenv";
dotenv.config(); // MUST come before cloudinary.config()

import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
	cloud_name: process.env.CLOUD_NAME,
	api_key: process.env.API_KEY,
	api_secret: process.env.API_SECRET,
});

const uploadFile = async (filePath) => {
	try {
		const result = await cloudinary.uploader.upload(filePath);
		// console.log("result", result);
		return result;
	} catch (error) {
		console.log("error", error);
	}
};
export default uploadFile;
