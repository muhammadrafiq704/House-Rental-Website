import UIButton from "@/components/Button/UIButton";
import UISelect from "@/components/SelectField/UISelect";
import UIInputFields from "@/components/TextField/UIInputFields";
import { Box } from "@mui/material";
import { useLayoutEffect } from "react";
import { useForm } from "react-hook-form";
import {
	useActionData,
	//   useNavigate,
	useNavigation,
	useSubmit,
} from "react-router-dom";
import { toast } from "react-toastify";
import { HouseRegisterWrapper } from "./styled";

const HouseRegister = () => {
	const submit = useSubmit();
	const navigating = useNavigation();
	//   const navigate = useNavigate();
	const actionData = useActionData();

	const isLoading =
		navigating.state === "loading" || navigating.state === "submitting";

	const houseRegisterForm = useForm({
		defaultValues: {
			property_type: "",
			file: "",
			desc: "",
			location: "",
			price: "",
			final_price: "",
			message: "",
		},
	});

	const { reset } = houseRegisterForm;

	const onSubmit = (data) => {
		const options = {
			encType: "multipart/form-data",
			method: "POST",
		};

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
				toast.error(`Error: ${actionData.message}`);
			}
		}
	}, [actionData, reset]);

	const dummyData = [
		{ id: 1, label: "House", value: "house" },
		{ id: 2, label: "Plot", value: "plot" },
		{ id: 3, label: "Apartment", value: "apartment" },
		{ id: 4, label: "Room", value: "rooms" },
		{ id: 5, label: "Shop", value: "shop" },
		{ id: 6, label: "Other", value: "other" },
	];

	return (
		<HouseRegisterWrapper>
			<form onSubmit={houseRegisterForm.handleSubmit(onSubmit)}>
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
						required: "Image is required",
					}}
					sx={{ mt: "1em" }}
					fullWidth
					type="file"
					multiple
					accept="image/*"
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
					name="location"
					placeholder="Enter location"
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
					placeholder="Enter rental, selling price"
					control={houseRegisterForm.control}
					rules={{
						required: "price is required",
					}}
					sx={{ mt: "1em" }}
					fullWidth
					type="number"
				/>
				<UIInputFields
					name="final_price"
					placeholder="Enter final rental, selling price"
					control={houseRegisterForm.control}
					rules={{
						required: "final price is required",
					}}
					sx={{ mt: "1em" }}
					fullWidth
					type="number"
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
					/>
				</Box>
			</form>
		</HouseRegisterWrapper>
	);
};

export default HouseRegister;
