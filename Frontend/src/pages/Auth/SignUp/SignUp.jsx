import { button_icons, social_icons } from "@/assets";
import UIButton from "@/components/Button/UIButton";
import UIIconButton from "@/components/Button/UIIconButton";
import { FlexBetween, StyledTypography } from "@/styled";
import { useNavigate, useNavigation } from "react-router-dom";
import {
	StyledAuthCardWrapper,
	StyledFormWrapper,
	StyledLinkWrapper,
} from "../styled";
import Form from "./Form";

const SignUp = () => {
	const navigate = useNavigate();
	const navigating = useNavigation();

	const isLoading =
		navigating.state === "loading" || navigating.state === "submitting";
	return (
		<StyledAuthCardWrapper>
			<StyledFormWrapper>
				<StyledTypography sx={{ pt: 2, color: "#006A71" }} fs={2.2}>
					Sign Up
				</StyledTypography>
				<Form />
			</StyledFormWrapper>
			<StyledLinkWrapper>
				<StyledTypography
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
					/>
					<UIIconButton
						variant="outlined"
						icon={social_icons.linkedIn}
						imgW={28}
						imgH={28}
					/>
					<UIIconButton
						variant="outlined"
						icon={social_icons.twitter}
						imgW={24}
						imgH={24}
					/>
				</FlexBetween>
				<UIButton
					variant="contained"
					label="Sign In"
					styletype="inverted"
					iconPosition="end"
					icon={button_icons.next}
					isLoading={isLoading}
					imgWidth={20}
					imgHeight={20}
					onClick={() => navigate("/sign-in")}
				/>
			</StyledLinkWrapper>
		</StyledAuthCardWrapper>
	);
};

export default SignUp;
