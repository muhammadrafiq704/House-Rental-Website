import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import Register from "../Models/AuthModels/RegisterModel.js";

export const loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res
				.status(400)
				.json({ message: "Email and password are required" });
		}

		const user = await Register.findOne({ email });
		if (!user) {
			return res.status(401).json({ message: "Invalid email or password" });
		}

		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(401).json({ message: "Invalid email or password" });
		}

		const token = jwt.sign(
			{ id: user._id, email: user.email },
			process.env.JWT_SECRET,
			{ expiresIn: process.env.JWT_EXPIRES_IN || "1d" },
		);

		res.status(200).json({
			message: "Login successful",
			token,
			user,
		});
	} catch (error) {
		console.error("Login error:", error);
		res.status(500).json({ message: "Server error during login" });
	}
};
