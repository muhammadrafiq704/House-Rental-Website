import UIButton from "@/components/Button/UIButton";
import UIInputFields from "@/components/TextField/UIInputFields";
import { useAuth } from "@/context/AuthContext";
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
	const { login } = useAuth();

	const isLoading =
		navigating.state === "loading" || navigating.state === "submitting";

	const loginForm = useForm({
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (data) => {
		const options = {
			encType: "application/json",
			action: "/sign-in",
			method: "POST",
		};
		submit(data, options);
	};

	useLayoutEffect(() => {
		if (actionData) {
			if (actionData.error === null) {
				toast.success(`Success: ${actionData.message}`);
				navigate("/");
				login(actionData.token);
			} else {
				toast.error(`Error: ${actionData.message}`);
			}
		}
	}, [actionData, navigate, login]);

	return (
		<form
			onSubmit={loginForm.handleSubmit(onSubmit)}
			style={{ width: "100%", padding: "20px", overflow: "hidden" }}
		>
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
			<UIButton
				label="Login"
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
