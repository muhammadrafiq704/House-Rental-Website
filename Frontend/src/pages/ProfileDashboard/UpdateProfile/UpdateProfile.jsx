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

	console.log("user", user);
	const { _id } = user;
	console.log("_id", _id);

	const updateProfileForm = useForm({
		values: {
			password: "",
			new_password: "",
			confirm_password: "",
			id: _id ?? "",
		},
	});

	const { reset } = updateProfileForm;

	const onSubmit = (data) => {
		const options = {
			encType: "application/json",
			method: "POST",
		};

		const dataHas = { ...data };

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
						name="password"
						placeholder="Enter old password"
						control={updateProfileForm.control}
						variant="outlined"
						sx={{ mt: "1em" }}
						fullWidth
						type="password"
					/>
					<UIInputFields
						name="new_password"
						placeholder="Enter new password"
						control={updateProfileForm.control}
						variant="outlined"
						sx={{ mt: "1em" }}
						fullWidth
						type="password"
					/>
					<UIInputFields
						name="confirm_password"
						placeholder="Enter confirm password"
						control={updateProfileForm.control}
						variant="outlined"
						sx={{ mt: "1em" }}
						fullWidth
						type="password"
					/>
					<UIButton label="Update Now" variant="contained" type="submit" />
				</FlexBetween>
			</form>
		</StyledUpdateProfileWrapper>
	);
};

export default UpdateProfile;
