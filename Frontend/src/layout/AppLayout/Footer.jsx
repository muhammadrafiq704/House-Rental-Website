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
			<FooterLogo sx={{ display: { xs: "none", md: "flex" } }}>
				<img
					src={icons.brangsaa}
					alt="logo"
					style={{
						width: "200px",
						height: "70px",
						objectFit: "cover",
						cursor: "pointer",
					}}
				/>
				<StyledTypography fs={0.8} fw={400} styletype="default">
					Where peace meets opportunity!
				</StyledTypography>
			</FooterLogo>
			<FooterLinks sx={{ display: { xs: "none", md: "flex" } }}>
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
			<FooterContact sx={{ alignItems: { xs: "center" } }}>
				<StyledTypography fs={1} styletype="default">
					Connect with us to explore your dream sites!
				</StyledTypography>
				<FlexBetween gap={20}>
					<UIIconButton
						variant="outlined"
						icon={social_icons.facebook}
						imgW={32}
						imgH={32}
						href="https://www.facebook.com/brangsaa/"
						target="blank"
					/>
					<UIIconButton
						variant="outlined"
						icon={social_icons.linkedIn}
						imgW={28}
						imgH={28}
						// onClick={()=>"https://www.facebook.com/brangsaa/"}
						// target="_blank"
					/>
					<UIIconButton
						variant="outlined"
						icon={social_icons.instagram}
						imgW={24}
						imgH={24}
						href="https://www.instagram.com/brangsaaa/"
						target="blank"
					/>
					<UIIconButton
						variant="outlined"
						icon={social_icons.pinterest}
						imgW={24}
						imgH={24}
						href="https://www.pinterest.com/brangsaa/"
						target="blank"
					/>
				</FlexBetween>
			</FooterContact>
			<FooterContactInfo sx={{ display: { xs: "none", md: "block" } }}>
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
						<img src={icons.location} alt="icon" />
						Skardu, Gilgit Baltistan
					</StyledTypography>
				</FlexBetween>
			</FooterContactInfo>
		</FooterContent>
	);
};

export default Footer;
