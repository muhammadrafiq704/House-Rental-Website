import UIButton from "@/components/Button/UIButton";
import UISelect from "@/components/SelectField/UISelect";
import UIInputFields from "@/components/TextField/UIInputFields";
import { StyledNavlink } from "@/styled";
import { Alert, Box } from "@mui/material";
import { useLayoutEffect } from "react";
import { useForm } from "react-hook-form";
import {
	useActionData,
	//   useNavigate,
	//   useNavigate,
	useNavigation,
	useSubmit,
} from "react-router-dom";
import { toast } from "react-toastify";
import { HouseRegisterWrapper } from "./styled";
import { dummyAreaUnitData, dummyData, dummyPurposeData } from "./utils";
// import { useAuth } from "@/context/AuthContext";

const HouseRegister = () => {
	const submit = useSubmit();
	const navigating = useNavigation();
	//   const navigate = useNavigate();
	const actionData = useActionData();
	//   const { user, token } = useAuth();

	const isLoading =
		navigating.state === "loading" || navigating.state === "submitting";

	const houseRegisterForm = useForm({
		defaultValues: {
			purpose: "",
			property_type: "",
			file: "",
			desc: "",
			city: "",
			location: "",
			price: "",
			area_amount: "",
			area_unit: "",
			room: "",
			bedroom: "",
			kitchen: "",
			contact_no: "",
			bathroom: "",
			message: "",
		},
	});

	const { reset } = houseRegisterForm;

	const onSubmit = (data) => {
		const options = {
			encType: "multipart/form-data",
			method: "POST",
		};
		// console.log('data', data)
		const dataHas = { ...data };
		const formData = new FormData();

		for (const [key, value] of Object.entries(dataHas)) {
			if (value instanceof FileList) {
				for (const file of value) {
					formData.append(key, file);
				}
			} else {
				formData.append(key, value);
			}
		}
		submit(formData, options);
	};

	useLayoutEffect(() => {
		if (actionData) {
			if (actionData.error === null) {
				toast.success(`Success: ${actionData.message}`);
				reset();
				// navigate("/sign-in");
			} else {
				toast.warning(`Error: ${actionData.message}`);
			}
		}
	}, [actionData, reset]);

	return (
		<HouseRegisterWrapper>
			<Alert severity="info" sx={{ width: "100%", fontSize: "16px" }}>
				Info: First of all you need to login before register your property.
				<tr />
				Click here <StyledNavlink to="/sign-in">Login</StyledNavlink>
			</Alert>
			<form
				onSubmit={houseRegisterForm.handleSubmit(onSubmit)}
				style={{ width: "100%" }}
			>
				<UISelect
					name="purpose"
					placeholder="Select your purpose"
					control={houseRegisterForm.control}
					data={dummyPurposeData}
					rules={{
						required: "Purpose is required",
					}}
					sx={{ mt: "1em" }}
					fullWidth
					type="text"
				/>
				<UISelect
					name="property_type"
					placeholder="Select property type"
					control={houseRegisterForm.control}
					data={dummyData}
					rules={{
						required: "Property type is required",
					}}
					sx={{ mt: "1em" }}
					fullWidth
					type="text"
				/>
				<UIInputFields
					name="file"
					placeholder="Choose image"
					control={houseRegisterForm.control}
					rules={{
						required: "File is required",
						validate: (files) => {
							if (!files || files.length === 0) return "Please select a file.";

							for (const file of files) {
								const isImage = file.type.startsWith("image/");
								const isVideo = file.type.startsWith("video/");

								const validImageTypes = [
									"image/png",
									"image/jpeg",
									"image/jpg",
								];
								const validVideoTypes = ["video/mp4"];
								if (
									(isImage && !validImageTypes.includes(file.type)) ||
									(isVideo && !validVideoTypes.includes(file.type))
								) {
									return "Only JPG, PNG images and MP4 videos are allowed.";
								}

								if (file.size > 1 * 1024 * 1024) {
									return "Each file must be less than or equal to 1MB.";
								}
							}

							return true;
						},
					}}
					sx={{ mt: "1em" }}
					fullWidth
					type="file"
					multiple
					accept="image/png, image/jpeg, image/jpg, video/mp4"
				/>
				<UIInputFields
					name="city"
					placeholder="Enter city"
					control={houseRegisterForm.control}
					rules={{
						required: "description is required",
					}}
					sx={{ mt: "1em" }}
					fullWidth
					type="text"
				/>
				<UIInputFields
					name="location"
					placeholder="Enter nearby location"
					control={houseRegisterForm.control}
					rules={{
						required: "location is required",
					}}
					sx={{ mt: "1em" }}
					fullWidth
					type="text"
				/>
				<UIInputFields
					name="price"
					placeholder="Enter rental, selling price in PKR"
					control={houseRegisterForm.control}
					rules={{
						required: "price is required",
						validate: (value) =>
							Number.parseFloat(value) >= 0 || "Value cannot be negative",
					}}
					sx={{ mt: "1em" }}
					fullWidth
					type="number"
				/>
				<Box sx={{ width: "100%", display: "flex", gap: "10px" }}>
					<UIInputFields
						name="area_amount"
						placeholder="Enter area Square Feet hint: (12-12)"
						control={houseRegisterForm.control}
						rules={{
							required: "area is required",
						}}
						sx={{ mt: "1em", flex: 1 }}
						type="number"
					/>
					<UISelect
						name="area_unit"
						placeholder="Select unit"
						control={houseRegisterForm.control}
						data={dummyAreaUnitData}
						rules={{
							required: "Purpose is required",
						}}
						sx={{ mt: "1em", flex: 1 }}
						type="text"
					/>
				</Box>
				<Box sx={{ display: "flex", gap: "10px", width: "100%" }}>
					<UIInputFields
						name="room"
						placeholder="Enter number of rooms"
						control={houseRegisterForm.control}
						rules={{
							required: "rooms is required",
						}}
						sx={{ mt: "1em", flex: 1 }}
						fullWidth
						type="number"
					/>
					<UIInputFields
						name="bedroom"
						placeholder="Enter number of bedrooms"
						control={houseRegisterForm.control}
						rules={{
							required: "Bedroom is required",
						}}
						sx={{ mt: "1em", flex: 1 }}
						fullWidth
						type="number"
					/>
					<UIInputFields
						name="bathroom"
						placeholder="Enter number of bathrooms"
						control={houseRegisterForm.control}
						rules={{
							required: "Bathrooms is required",
						}}
						sx={{ mt: "1em", flex: 1 }}
						fullWidth
						type="number"
					/>
					<UIInputFields
						name="kitchen"
						placeholder="Enter number of kitchen"
						control={houseRegisterForm.control}
						rules={{
							required: "kitchen is required",
						}}
						sx={{ mt: "1em", flex: 1 }}
						fullWidth
						type="number"
					/>
				</Box>
				<UIInputFields
					name="contact_no"
					placeholder="Enter contact number(WhastApp)"
					control={houseRegisterForm.control}
					rules={{
						required: "contact number is required",
					}}
					sx={{ mt: "1em" }}
					fullWidth
					type="text"
				/>
				<UIInputFields
					name="desc"
					placeholder="Enter description"
					control={houseRegisterForm.control}
					rules={{
						required: "description is required",
					}}
					sx={{ mt: "1em" }}
					fullWidth
					type="text"
				/>
				<UIInputFields
					name="message"
					placeholder="Enter optional message"
					control={houseRegisterForm.control}
					rules={{
						required: "message is required",
					}}
					sx={{ mt: "1em" }}
					fullWidth
					type="text"
					multiline
					rows={4}
				/>
				<Box sx={{ display: "flex", justifyContent: "center" }}>
					<UIButton
						label="Register Now"
						variant="contained"
						sx={{ mt: "1.5rem", width: "400px" }}
						isLoading={isLoading}
						type="submit"
						fullWidth
						// onClick={() => {
						//   token && user ? isLoading : navigate("/sign-in");
						// }}
					/>
				</Box>
			</form>
		</HouseRegisterWrapper>
	);
};

export default HouseRegister;
