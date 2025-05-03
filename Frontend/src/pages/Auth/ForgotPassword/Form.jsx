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
			new_password: "",
			confirm_password: "",
		},
	});

	const onSubmit = (data) => {
		const options = {
			encType: "application/json",
			action: "/sign-in",
			method: "PUT",
		};
		submit(data, options);
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
		<form onSubmit={loginForm.handleSubmit(onSubmit)}>
			<UIInputFields
				name="new_password"
				placeholder="Enter your new password"
				control={loginForm.control}
				rules={{
					required: "new password is required",
					pattern: {
						value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
						message: "Please enter a valid email address",
					},
				}}
				sx={{ mt: "1.5em" }}
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
				label="Update"
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
