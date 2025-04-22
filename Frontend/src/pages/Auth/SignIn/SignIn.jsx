import { button_icons, social_links } from "@/assets";
import UIButton from "@/components/Button/UIButton";
import UIIconButton from "@/components/Button/UIIconButton";
import { FlexBetween, StyledNavlink, StyledTypography } from "@/styled";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import {
	StyledAuthCardWrapper,
	StyledFormWrapper,
	StyledLinkWrapper,
} from "./styled";

const SignIn = () => {
	const navigate = useNavigate();
	return (
		<StyledAuthCardWrapper>
			<StyledFormWrapper>
				<StyledTypography sx={{ pt: 2, color: "#006A71" }} fs={2.2}>
					Login
				</StyledTypography>
				<Form />
				<StyledNavlink
					to="/forgot-password"
					sx={{
						width: "100%",
						mt: 1.5,
						textAlign: "right",
						pr: 3,
					}}
				>
					Forgot password?
				</StyledNavlink>
			</StyledFormWrapper>
			<StyledLinkWrapper>
				<StyledTypography
					fs={1}
					sx={{ textAlign: "center", padding: "0 30px 0 30px" }}
				>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore dolor
					deleniti ab illum aperiam temporibus saepe ad optio, ducimus fugit?
				</StyledTypography>
				<FlexBetween>
					<UIIconButton
						variant="contained"
						icon={social_links.facebook}
						imgW={32}
						imgH={32}
					/>
					<UIIconButton
						variant="contained"
						icon={social_links.linkedIn}
						imgW={28}
						imgH={28}
					/>
					<UIIconButton
						variant="contained"
						icon={social_links.twitter}
						imgW={24}
						imgH={24}
					/>
				</FlexBetween>
				<UIButton
					variant="contained"
					label="Sign Up"
					styletype="inverted"
					iconPosition="end"
					icon={button_icons.next}
					imgWidth={20}
					imgHeight={20}
					onClick={() => navigate("/sign-up")}
				/>
			</StyledLinkWrapper>
		</StyledAuthCardWrapper>
	);
};

export default SignIn;
