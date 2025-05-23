import { icons, social_icons } from "@/assets";
import UIIconButton from "@/components/Button/UIIconButton";
import { FlexBetween, StyledNavlink, StyledTypography } from "@/styled";
import { FooterData } from "../utils/FooterData";
import {
	FooterContact,
	FooterContactInfo,
	FooterContent,
	FooterLinks,
	FooterLogo,
} from "./styled";

const Footer = () => {
	return (
		<FooterContent>
			<FooterLogo>
				<StyledTypography fs={1.3} fw={600} styletype="default">
					House Rental Website{" "}
				</StyledTypography>
				<img src={social_icons.facebook} alt="logo" />
			</FooterLogo>
			<FooterLinks>
				{FooterData.map((footer) => (
					<StyledNavlink
						key={footer.id}
						to={
							footer.title === "About Us" ||
							footer.title === "Contact Us" ||
							footer.title === "Our Services" ||
							footer.title === "Terms & Conditions" ||
							footer.title === "Privacy Policy"
								? footer.href
								: `/${footer.title.toLowerCase()}`
						}
						sx={{ fontSize: "14px" }}
					>
						{footer.title}
					</StyledNavlink>
				))}
			</FooterLinks>
			<FooterContact>
				<StyledTypography fs={1} styletype="default">
					Connect with us to explore your dream sites!
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
						icon={social_icons.instagram}
						imgW={24}
						imgH={24}
					/>
					<UIIconButton
						variant="outlined"
						icon={social_icons.pinterest}
						imgW={24}
						imgH={24}
					/>
				</FlexBetween>
			</FooterContact>
			<FooterContactInfo>
				<FlexBetween gap={12} direction="column">
					<StyledTypography
						fs={1}
						styletype="default"
						sx={{
							display: "flex",
							alignItems: "center",
							gap: "8px",
							cursor: "pointer",
						}}
					>
						<img src={icons.phone_call} alt="icon" width={18} height={18} /> +92
						3487753039
					</StyledTypography>
					<StyledTypography
						fs={1}
						styletype="default"
						sx={{
							display: "flex",
							alignItems: "center",
							gap: "8px",
							cursor: "pointer",
						}}
					>
						<img src={icons.phone_call} alt="icon" width={18} height={18} /> +92
						3488107134
					</StyledTypography>
					<StyledTypography
						fs={1}
						styletype="default"
						sx={{
							display: "flex",
							alignItems: "center",
							gap: "8px",
							cursor: "pointer",
						}}
					>
						<img src={icons.email} alt="icon" width={18} height={18} />{" "}
						brangsaa@gmail.com
					</StyledTypography>
					<StyledTypography
						fs={1}
						styletype="default"
						sx={{
							display: "flex",
							alignItems: "center",
							gap: "8px",
							cursor: "pointer",
						}}
					>
						<img src={icons.location} alt="icon" /> DBA Building Near Hameed
						Ghard, Skardu
					</StyledTypography>
				</FlexBetween>
			</FooterContactInfo>
		</FooterContent>
	);
};

export default Footer;
