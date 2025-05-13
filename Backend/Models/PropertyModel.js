import mongoose from "mongoose";

const propertySchema = new mongoose.Schema(
	{
		purpose: { type: String, required: true },
		property_type: { type: String, required: true },
		file: [{ type: String, required: true }],
		desc: { type: String },
		location: { type: String, required: true },
		price: { type: Number, required: true },
		area_amount: { type: Number, required: true },
		area_unit: { type: String, required: true },
		room: { type: Number, required: true },
		bedroom: { type: Number, required: true },
		kitchen: { type: Number, required: true },
		bathroom: { type: Number, required: true },
		message: { type: String },
		contact_no: { type: String, required: true },
	},
	{
		timestamps: true,
	},
);

const Property = mongoose.model("Property", propertySchema);
export default Property;
