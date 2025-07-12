import fs from "node:fs";
import path from "node:path";
import multer from "multer";

// Create uploads folder if it doesn't exist
const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
	fs.mkdirSync(uploadDir);
}

// Configure storage
const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, uploadDir);
	},
	filename: (req, file, cb) => {
		const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
		const ext = path.extname(file.originalname);
		cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
	},
});

// Allow images and mp4 videos
const fileFilter = (req, file, cb) => {
	const allowedTypes = ["image/jpeg", "image/png", "image/jpg", "video/mp4"];

	if (allowedTypes.includes(file.mimetype)) {
		cb(null, true);
	} else {
		cb(
			new Error("Only JPG, JPEG, PNG images and MP4 videos are allowed"),
			false,
		);
	}
};

// Multer config
const upload = multer({
	storage,
	fileFilter,
	limits: {
		fileSize: 20 * 1024 * 1024, // Max 20MB per file (you can change this)
	},
});

// Export utility methods
export const uploadSingle = (fieldName) => upload.single(fieldName);
export const uploadMultiple = (fieldName, maxCount = 5) =>
	upload.array(fieldName, maxCount);
export const uploadFields = (fieldsArray) => upload.fields(fieldsArray);

export default upload;
