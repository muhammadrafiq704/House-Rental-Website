import { social_icons } from "@/assets";
import UIButton from "@/components/Button/UIButton";
import UIIconButton from "@/components/Button/UIIconButton";
import UIInputFields from "@/components/TextField/UIInputFields";
import { FormWrapper } from "@/pages/ContactUs/styled";
import { StyledTypography } from "@/styled";
import { Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { useSubmit } from "react-router-dom";

const Form = () => {
	const submit = useSubmit();

	const contactForm = useForm({
		defaultValues: {
			email: "",
			message: "",
		},
	});

	const onSubmit = (data) => {
		const options = {
			encType: "application/json",
			action: "/sign-up",
			method: "POST",
		};
		submit(data, options);
	};

	return (
		<FormWrapper>
			<StyledTypography fs={1.1} styletype="default" fw={500}>
				Get In Touch
			</StyledTypography>
			<form
				onSubmit={contactForm.handleSubmit(onSubmit)}
				style={{
					width: "100%",
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
					gap: "10px",
				}}
			>
				<UIInputFields
					name="fullname"
					placeholder="Your Fullname"
					control={contactForm.control}
					rules={{ reqiured: "Fullname is required" }}
					sx={{ mt: 1 }}
					fullWidth
				/>
				<UIInputFields
					name="email"
					placeholder="Your Email"
					control={contactForm.control}
					rules={{ reqiured: "Email is required" }}
					sx={{ mt: 1 }}
					fullWidth
				/>
				<UIInputFields
					name="message"
					placeholder="Message"
					control={contactForm.message}
					rules={{ reqiured: "Message is required" }}
					sx={{ mt: 1 }}
					fullWidth
					multiline
					rows={3}
				/>
				<UIButton
					label="Submit"
					type="submit"
					variant="contained"
					sx={{ width: "200px" }}
				/>
			</form>
			<StyledTypography fs={1.1} styletype="default" fw={500}>
				Our Social
			</StyledTypography>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					gap: "10px",
				}}
			>
				<UIIconButton
					icon={social_icons.facebook}
					variant="outlined"
					imgH={24}
					imgW={24}
				/>
				<UIIconButton
					icon={social_icons.twitter}
					variant="outlined"
					imgH={24}
					imgW={24}
				/>
				<UIIconButton
					icon={social_icons.linkedIn}
					variant="outlined"
					imgH={24}
					imgW={24}
				/>
			</Box>
		</FormWrapper>
	);
};

export default Form;
