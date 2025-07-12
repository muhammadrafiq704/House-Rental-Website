import mongoose from "mongoose";

const RegisterSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			lowercase: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			minlength: 6,
		},
		file: { type: String, required: true },
	},
	{
		timestamps: true,
	},
);

const Register = mongoose.model("Register", RegisterSchema);

export default Register;
