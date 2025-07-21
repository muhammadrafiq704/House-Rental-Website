import bcrypt from "bcryptjs";
import Register from "../../Models/AuthModels/RegisterModel.js";

export const UpdateEmail = async (req, res) => {
	const { id, new_email } = req.body;

	try {
		const user = await Register.findById(id);
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		if (user.email === new_email) {
			return res.status(404).json({ message: "Email are same" });
		}

		user.email = new_email;
		await user.save();
		res.status(200).json({ message: "Email Updated Successfully" });
	} catch (error) {
		res.status(500).json({ message: "Server error while updating email" });
	}
};
