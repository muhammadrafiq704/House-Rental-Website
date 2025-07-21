import UIButton from "@/components/Button/UIButton";
import UIInputFields from "@/components/TextField/UIInputFields";
import { useAuth } from "@/context/AuthContext";
import { FlexBetween } from "@/styled";
import { useLayoutEffect } from "react";
import { useForm } from "react-hook-form";
import { useActionData, useSubmit } from "react-router-dom";
import { toast } from "react-toastify";
import { StyledUpdateProfileWrapper } from "./styled";

const UpdateProfile = () => {
	const actionData = useActionData();
	const submit = useSubmit();

	const { user } = useAuth();

	const { _id } = user;
	console.log("_id", _id);

	const updateProfileForm = useForm({
		values: {
			new_email: "",
			id: _id ?? "",
		},
	});

	const { reset } = updateProfileForm;

	const onSubmit = (data) => {
		const options = {
			encType: "application/json",
			method: "PUT",
		};

		const dataHas = { ...data };
		console.log("dataHas", dataHas);
		submit(dataHas, options);
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
		<StyledUpdateProfileWrapper>
			<form onSubmit={updateProfileForm.handleSubmit(onSubmit)}>
				<FlexBetween direction="column" gap={16}>
					<UIInputFields
						name="new_email"
						placeholder="Enter your email"
						control={updateProfileForm.control}
						variant="outlined"
						sx={{ mt: "1em" }}
						fullWidth
						type="text"
					/>
					<UIButton label="Update Now" variant="contained" type="submit" />
				</FlexBetween>
			</form>
		</StyledUpdateProfileWrapper>
	);
};

export default UpdateProfile;
