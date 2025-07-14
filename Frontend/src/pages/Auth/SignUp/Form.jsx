import UIButton from "@/components/Button/UIButton";
import UIInputFields from "@/components/TextField/UIInputFields";
import { useLayoutEffect } from "react";
import { useForm } from "react-hook-form";
import {
	useActionData,
	useNavigate,
	useNavigation,
	useSubmit,
} from "react-router-dom";
import { toast } from "react-toastify";

const Form = () => {
	const submit = useSubmit();
	const navigating = useNavigation();
	const navigate = useNavigate();
	const actionData = useActionData();

	const isLoading =
		navigating.state === "loading" || navigating.state === "submitting";

	const loginForm = useForm({
		defaultValues: {
			username: "",
			email: "",
			password: "",
			confirm_password: "",
			file: "",
		},
	});

	const onSubmit = (data) => {
		const options = {
			encType: "multipart/form-data",
			action: "/sign-up",
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
				navigate("/sign-in");
			} else {
				toast.error(`Error: ${actionData.message}`);
			}
		}
	}, [actionData, navigate]);

	return (
		<form
			onSubmit={loginForm.handleSubmit(onSubmit)}
			style={{ padding: "0 20px 10px 20px" }}
		>
			<UIInputFields
				name="file"
				placeholder="Choose profile image"
				control={loginForm.control}
				rules={{
					required: "Profile image is required",
					validate: (fileList) => {
						const file = fileList?.[0];
						if (!file) return "Profile image is required";
						if (file.size > 2 * 1024 * 1024) {
							return "File must be less than or equal to 2MB.";
						}
						return true;
					},
				}}
				sx={{ mt: "1em" }}
				fullWidth
				type="file"
				accept="image/png, image/jpeg, image/jpg"
			/>
			<UIInputFields
				name="username"
				placeholder="Enter your username"
				control={loginForm.control}
				rules={{
					required: "Username is required",
				}}
				sx={{ mt: "1em" }}
				fullWidth
				type="text"
			/>
			<UIInputFields
				name="email"
				placeholder="Enter your email"
				control={loginForm.control}
				rules={{
					required: "Email is required",
					pattern: {
						value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
						message: "Please enter a valid email address",
					},
				}}
				sx={{ mt: "1.5em" }}
				fullWidth
				type="email"
			/>
			<UIInputFields
				name="password"
				placeholder="Enter your password"
				control={loginForm.control}
				rules={{
					required: "Password is required",
				}}
				sx={{ mt: "1em" }}
				fullWidth
				type="password"
			/>
			<UIInputFields
				name="confirm_password"
				placeholder="Enter your confirm password"
				control={loginForm.control}
				rules={{
					required: "Confirm password is required",
				}}
				sx={{ mt: "1em" }}
				fullWidth
				type="password"
			/>
			<UIButton
				label="Sign Up"
				variant="contained"
				sx={{ mt: "1.5rem" }}
				isLoading={isLoading}
				type="submit"
				fullWidth
			/>
		</form>
	);
};

export default Form;
