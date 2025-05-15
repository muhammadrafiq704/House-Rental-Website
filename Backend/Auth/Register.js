import bcrypt from "bcryptjs";
import Register from "../Models/AuthModels/RegisterModel.js";

export const registerUser = async (req, res) => {
	try {
		const { username, email, password, confirm_password } = req.body;
		console.log("req.body", req.body);

		if (!username || !email || !password || !confirm_password) {
			return res.status(400).json({ message: "All fields are required" });
		}

		const existingUser = await Register.findOne({ email });
		if (existingUser) {
			return res.status(400).json({ message: "Email already in use" });
		}

		if (password !== confirm_password) {
			return res.status(400).json({ message: "Passwords do not match" });
		}

		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new Register({
			username,
			email,
			password: hashedPassword,
		});

		await newUser.save();

		res.status(201).json({
			message: "User registered successfully",
		});
	} catch (error) {
		console.error("Registration error:", error);
		res.status(500).json({ message: "Server error" });
	}
};
