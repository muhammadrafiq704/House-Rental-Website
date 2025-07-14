import Register from "../Models/AuthModels/RegisterModel.js";

export const SingleUser = async (req, res) => {
	const { id } = req.params;
	try {
		const user = await Register.findById({ _id: id });
		if (!user) {
			res.status(400).json({ message: "User not found" });
		}
		res.status(200).json({ message: "User found", data: user });
	} catch (error) {
		res
			.status(500)
			.json({ message: "Server Error while getting user", error: error });
	}
};
