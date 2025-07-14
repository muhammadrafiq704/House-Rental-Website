import UIInputFields from "@/components/TextField/UIInputFields";
import { useAuth } from "@/context/AuthContext";
import { ImageGettingURL } from "@/utils/ImageGettingURL";
import { Box } from "@mui/material";
import { useLayoutEffect } from "react";
import { useForm } from "react-hook-form";
import { useActionData, useSubmit } from "react-router-dom";
import { toast } from "react-toastify";
import { StyledUpdateProfileWrapper } from "./styled";

const UpdateProfile = () => {
	const actionData = useActionData();
	const submit = useSubmit();
	const { user } = useAuth();

	const updateProfileForm = useForm({
		values: {
			file: user?.file ?? "",
			username: user?.username ?? "",
			email: user?.email ?? "",
		},
	});

	const { reset } = updateProfileForm;

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
				toast.warning(`Error: ${actionData.message}`);
			}
		}
	}, [actionData, reset]);

	return (
		<StyledUpdateProfileWrapper>
			<from onSubmit={updateProfileForm.handleSubmit(onSubmit)}>
				<Box sx={{ width: "l00px", height: "100px" }}>
					<img
						src={ImageGettingURL(updateProfileForm.file)}
						alt="profile-img"
					/>
				</Box>
				<UIInputFields placeholder="" />
			</from>
		</StyledUpdateProfileWrapper>
	);
};

export default UpdateProfile;
