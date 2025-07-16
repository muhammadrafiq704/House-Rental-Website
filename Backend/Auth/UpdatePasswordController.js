import bcrypt from "bcryptjs";
import Register from "../Models/AuthModels/RegisterModel.js";

export const UpdatePassword = async (req, res) => {
	const { id, password, new_password, confirm_password } = req.body;

	try {
		const user = await Register.findById(id);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		const isMatch = await bcrypt.compare(password, user.password);
		if (!isMatch) {
			return res.status(404).json({ message: "Old Password is incorrect" });
		}
		if (new_password !== confirm_password) {
			return res.status(400).json({ message: "New password do not match" });
		}
		const saltedPassword = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(new_password, saltedPassword);

		user.password = hashedPassword;
		await user.save();
		res.status(200).json({ message: "Password Updated Successfully" });
	} catch (error) {
		res.status(500).json({ message: "Server error while updating password" });
	}
};
