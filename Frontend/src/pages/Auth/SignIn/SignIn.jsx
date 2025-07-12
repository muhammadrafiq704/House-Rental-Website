import { button_icons, social_icons } from "@/assets";
import UIButton from "@/components/Button/UIButton";
import UIIconButton from "@/components/Button/UIIconButton";
import { FlexBetween, StyledNavlink, StyledTypography } from "@/styled";
import { Box } from "@mui/material";
import { useNavigate, useNavigation } from "react-router-dom";
import {
	StyledAuthCardWrapper,
	StyledFormWrapper,
	StyledLinkWrapper,
} from "../styled";
import Form from "./Form";

const SignIn = () => {
	const navigate = useNavigate();
	const navigating = useNavigation();

	const isLoading =
		navigating.state === "loading" || navigating.state === "submitting";
	return (
		<StyledAuthCardWrapper>
			<StyledFormWrapper>
				<StyledTypography sx={{ pt: 2, color: "#006A71" }} fs={2.2}>
					Login
				</StyledTypography>
				<Form /> {/* form*/}
				<Box
					sx={{ display: "flex", justifyContent: "flex-end", width: "100%" }}
				>
					<StyledNavlink
						to="/forgot-password"
						sx={{
							mt: 1.5,
							textAlign: "right",
							pr: 3,
						}}
					>
						Forgot password?
					</StyledNavlink>
				</Box>
			</StyledFormWrapper>
			<StyledLinkWrapper>
				<StyledTypography
					styletype="default"
					fs={1}
					sx={{ textAlign: "center", padding: "0 30px 0 30px" }}
				>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore dolor
					deleniti ab illum aperiam temporibus saepe ad optio, ducimus fugit?
				</StyledTypography>
				<FlexBetween gap={20}>
					<UIIconButton
						variant="outlined"
						icon={social_icons.facebook}
						imgW={32}
						imgH={32}
						href="https://www.facebook.com/brangsaa/"
					/>
					<UIIconButton
						variant="outlined"
						icon={social_icons.linkedIn}
						imgW={28}
						imgH={28}
					/>
					<UIIconButton
						variant="outlined"
						icon={social_icons.instagram}
						imgW={24}
						imgH={24}
						href="https://www.instagram.com/brangsaaa/"
					/>
					<UIIconButton
						variant="outlined"
						icon={social_icons.pinterest}
						imgW={24}
						imgH={24}
						href="https://www.pinterest.com/brangsaa/"
					/>
				</FlexBetween>
				<UIButton
					variant="contained"
					label="Sign Up"
					styletype="inverted"
					iconPosition="end"
					icon={button_icons.next}
					isLoading={isLoading}
					imgWidth={20}
					imgHeight={20}
					onClick={() => navigate("/sign-up")}
				/>
			</StyledLinkWrapper>
		</StyledAuthCardWrapper>
	);
};

export default SignIn;
