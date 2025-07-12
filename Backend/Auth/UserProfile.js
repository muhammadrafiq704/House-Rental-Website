import Register from "../Models/AuthModels/RegisterModel.js";

export const userProfile = async (req, res) => {
	const user = await Register.findById(req.user.id);
	if (!user) {
		res.status(404).json({ message: "User Not found" });
	}
	res.status(200).json({ data: user });
};
