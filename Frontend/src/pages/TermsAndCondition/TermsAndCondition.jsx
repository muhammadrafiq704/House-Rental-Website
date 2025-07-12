import { images } from "@/assets";
import { StyledTypography } from "@/styled";
import {
	Box,
	Grid,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
} from "@mui/material";
import { StyledTermsAndConditionWrapper } from "./styled";
import {
	accountRegistrationData,
	conductAndResponsibilitiesData,
	disclaimerData,
	listingAndContentData,
	terminationData,
	useWebsiteData,
} from "./utils";

const TermsAndCondition = () => {
	return (
		<StyledTermsAndConditionWrapper container spacing={2}>
			<Grid item size={{ lg: 6 }}>
				<StyledTypography fs={1} styletype="default" light maxlines={5}>
					Welcome to Brangsaa.com – a free real estate listing platform designed
					to connect property buyers, sellers, and renters in Gilgit-Baltistan,
					especially Skardu and surrounding regions. By accessing or using
					Brangsaa.com, you agree to be bound by these Terms and Conditions.
					Please read them carefully before using our services.
				</StyledTypography>
				<StyledTypography fs={1.5} styletype="default" fw={500} sx={{ mt: 1 }}>
					Acceptance of Terms
				</StyledTypography>

				<StyledTypography fs={1} styletype="default" light>
					By using this website, you agree to these Terms and Conditions, our
					Privacy Policy, and all applicable laws and regulations. If you do not
					agree with any part of these terms, you must not use the website.
				</StyledTypography>
				<StyledTypography fs={1.5} styletype="default" fw={500} sx={{ mt: 1 }}>
					Eligibility
				</StyledTypography>

				<StyledTypography fs={1} styletype="default" light>
					You must be at least 18 years old or the legal age in your
					jurisdiction to use this site. By using the website, you confirm that
					you meet this requirement..
				</StyledTypography>

				<StyledTypography fs={1.5} styletype="default" fw={500} sx={{ mt: 1 }}>
					Use of the Website
				</StyledTypography>
				<StyledTypography fs={1} styletype="default" light>
					Brangsaa.com is a public, free platform where users can:
				</StyledTypography>
				<Grid item size="grow">
					<List>
						{useWebsiteData.slice(0, 4).map((data) => (
							<>
								<ListItem key={data.id}>
									<ListItemAvatar>
										<img
											src={data.icon}
											alt="icon"
											style={{ width: "24px", height: "24px" }}
										/>
									</ListItemAvatar>
									<StyledTypography fs={1} styletype="default" light fw={500}>
										{data.title}
									</StyledTypography>
								</ListItem>
							</>
						))}
					</List>
					<StyledTypography fs={1} styletype="default" light>
						You agree not to use the website for:
					</StyledTypography>
					<List>
						{useWebsiteData.slice(4, 9).map((data) => (
							<>
								<ListItem key={data.id}>
									<ListItemAvatar>
										<img
											src={data.icon}
											alt="icon"
											style={{ width: "24px", height: "24px" }}
										/>
									</ListItemAvatar>
									<StyledTypography fs={1} styletype="default" light fw={500}>
										{data.title}
									</StyledTypography>
								</ListItem>
							</>
						))}
					</List>
					<StyledTypography
						fs={1.5}
						styletype="default"
						fw={500}
						sx={{ mt: 1 }}
					>
						Account Registration
					</StyledTypography>
					<StyledTypography fs={1} styletype="default">
						To post a property, you may need to create an account. You agree to:
					</StyledTypography>
					<List>
						{accountRegistrationData.map((data) => (
							<>
								<ListItem key={data.id}>
									<ListItemAvatar>
										<img
											src={data.icon}
											alt="icon"
											style={{ width: "24px", height: "24px" }}
										/>
									</ListItemAvatar>
									<StyledTypography fs={1} styletype="default" light fw={500}>
										{data.title}
									</StyledTypography>
								</ListItem>
							</>
						))}
					</List>

					<StyledTypography fs={1} styletype="default" light>
						We reserve the right to suspend or delete your account if we find
						any misuse or violation of these terms.
					</StyledTypography>
					<StyledTypography
						fs={1.5}
						styletype="default"
						fw={500}
						sx={{ mt: 1 }}
					>
						Listings and Content
					</StyledTypography>
					<StyledTypography fs={1} styletype="default" light>
						All property listings, images, descriptions, prices, and contact
						information posted on Brangsaa.com are submitted by users.
					</StyledTypography>
					<StyledTypography fs={1} styletype="default" fw={500} sx={{ mt: 1 }}>
						Brangsaa.com does not:
					</StyledTypography>
					<List>
						{listingAndContentData.slice(0, 3).map((data) => (
							<>
								<ListItem key={data.id}>
									<ListItemAvatar>
										<img
											src={data.icon}
											alt="icon"
											style={{ width: "24px", height: "24px" }}
										/>
									</ListItemAvatar>
									<StyledTypography fs={1} styletype="default" light fw={500}>
										{data.title}
									</StyledTypography>
								</ListItem>
							</>
						))}
					</List>
					<StyledTypography fs={1} styletype="default" fw={500} sx={{ mt: 1 }}>
						You agree not to post illegal or objectionable content, including:
					</StyledTypography>
					<List>
						{listingAndContentData.slice(3, 7).map((data) => (
							<>
								<ListItem key={data.id}>
									<ListItemAvatar>
										<img
											src={data.icon}
											alt="icon"
											style={{ width: "24px", height: "24px" }}
										/>
									</ListItemAvatar>
									<StyledTypography fs={1} styletype="default" light fw={500}>
										{data.title}
									</StyledTypography>
								</ListItem>
							</>
						))}
					</List>
					<StyledTypography
						fs={1.5}
						styletype="default"
						fw={500}
						sx={{ mt: 1 }}
					>
						User Conduct and Responsibilities
					</StyledTypography>
					<StyledTypography fs={1} styletype="default" light>
						As a user, you agree to:
					</StyledTypography>
					<List>
						{conductAndResponsibilitiesData.map((data) => (
							<>
								<ListItem key={data.id}>
									<ListItemAvatar>
										<img
											src={data.icon}
											alt="icon"
											style={{ width: "24px", height: "24px" }}
										/>
									</ListItemAvatar>
									<StyledTypography fs={1} styletype="default" light fw={500}>
										{data.title}
									</StyledTypography>
								</ListItem>
							</>
						))}
					</List>
					<StyledTypography fs={1} styletype="default" light>
						You understand and agree that Brangsaa.com is only a medium, and
						that any dealings between you and another user are your sole
						responsibility.
					</StyledTypography>
					<StyledTypography
						fs={1.5}
						styletype="default"
						fw={500}
						sx={{ mt: 1 }}
					>
						Disclaimer of Liability
					</StyledTypography>
					<StyledTypography fs={1} styletype="default" light>
						Brangsaa.com is provided "as-is" and "as-available" with no
						warranties or guarantees of any kind.
					</StyledTypography>
					<StyledTypography fs={1} styletype="default" light sx={{ mt: 1 }}>
						We are not liable for:
					</StyledTypography>
					<List>
						{disclaimerData.slice(0, 4).map((data) => (
							<>
								<ListItem key={data.id}>
									<ListItemAvatar>
										<img
											src={data.icon}
											alt="icon"
											style={{ width: "24px", height: "24px" }}
										/>
									</ListItemAvatar>
									<StyledTypography fs={1} styletype="default" light fw={500}>
										{data.title}
									</StyledTypography>
								</ListItem>
							</>
						))}
					</List>
					<StyledTypography fs={1} styletype="default" light fw={500}>
						Brangsaa.com is not involved in any transactions. We do not verify
						ownership, pricing, or legality of any listing.
					</StyledTypography>
					<StyledTypography fs={1} styletype="default" light sx={{ mt: 1 }}>
						Users are strongly advised to:
					</StyledTypography>
					<List>
						{disclaimerData.slice(4, 8).map((data) => (
							<>
								<ListItem key={data.id}>
									<ListItemAvatar>
										<img
											src={data.icon}
											alt="icon"
											style={{ width: "24px", height: "24px" }}
										/>
									</ListItemAvatar>
									<StyledTypography fs={1} styletype="default" light fw={500}>
										{data.title}
									</StyledTypography>
								</ListItem>
							</>
						))}
					</List>
					<StyledTypography
						fs={1.5}
						styletype="default"
						fw={500}
						sx={{ mt: 1 }}
					>
						Intellectual Property
					</StyledTypography>
					<StyledTypography fs={1} styletype="default" light>
						All content on Brangsaa.com, including logos, website design, text,
						graphics, and layout, is our intellectual property unless otherwise
						stated. You may not copy, reproduce, or distribute our content
						without prior written permission.
					</StyledTypography>

					<StyledTypography
						fs={1.5}
						styletype="default"
						fw={500}
						sx={{ mt: 1 }}
					>
						Termination
					</StyledTypography>
					<StyledTypography fs={1} styletype="default" light>
						We reserve the right to:
					</StyledTypography>
					<List>
						{terminationData.slice(0, 2).map((data) => (
							<>
								<ListItem key={data.id}>
									<ListItemAvatar>
										<img
											src={data.icon}
											alt="icon"
											style={{ width: "24px", height: "24px" }}
										/>
									</ListItemAvatar>
									<StyledTypography fs={1} styletype="default" light fw={500}>
										{data.title}
									</StyledTypography>
								</ListItem>
							</>
						))}
					</List>
					<StyledTypography fs={1} styletype="default" light>
						Reasons may include, but are not limited to:
					</StyledTypography>
					<List>
						{terminationData.slice(1, 6).map((data) => (
							<>
								<ListItem key={data.id}>
									<ListItemAvatar>
										<img
											src={data.icon}
											alt="icon"
											style={{ width: "24px", height: "24px" }}
										/>
									</ListItemAvatar>
									<StyledTypography fs={1} styletype="default" light fw={500}>
										{data.title}
									</StyledTypography>
								</ListItem>
							</>
						))}
					</List>
					<StyledTypography
						fs={1.5}
						styletype="default"
						fw={500}
						sx={{ mt: 1 }}
					>
						Changes to Terms
					</StyledTypography>

					<StyledTypography fs={1} styletype="default" light>
						We may update these Terms and Conditions at any time without prior
						notice. Updated terms will be posted on this page with the effective
						date. Continued use of the site constitutes your acceptance of the
						changes.
					</StyledTypography>

					<StyledTypography
						fs={1.5}
						styletype="default"
						fw={500}
						sx={{ mt: 1 }}
					>
						Governing Law
					</StyledTypography>
					<StyledTypography fs={1} styletype="default" light>
						These Terms and Conditions are governed by the laws of Pakistan, and
						any disputes will be handled in accordance with the legal system of
						Gilgit-Baltistan.
					</StyledTypography>
				</Grid>
			</Grid>
			<Grid item size={{ lg: 6 }}>
				<Box>
					<img src={images.privacy} alt="img" style={{ objectFit: "cover" }} />
				</Box>
			</Grid>
		</StyledTermsAndConditionWrapper>
	);
};

export default TermsAndCondition;
