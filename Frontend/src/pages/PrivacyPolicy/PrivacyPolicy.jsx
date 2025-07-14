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
import { StyledPrivacyPolicyWrapper } from "./styled";
import { disclaimerData, privacyData, userInfo } from "./utils";

const PrivacyPolicy = () => {
	return (
		<StyledPrivacyPolicyWrapper container spacing={2}>
			<Grid item size={{ lg: 6 }}>
				<StyledTypography fs={1} styletype="default" light maxlines={5}>
					At Brangsaa.com, accessible from https://www.brangsaa.com, we value
					and respect the privacy of our users. This Privacy Policy outlines the
					types of personal and non-personal information we collect, how we use
					and protect it, and your rights regarding your information. By using
					our website, you agree to the practices described in this policy.
				</StyledTypography>
				<Grid item size="grow">
					<List>
						{privacyData.map((data) => (
							<>
								<ListItem
									key={data.id}
									sx={{
										display: "flex",
										flexDirection: "column",
										alignItems: "flex-start",
									}}
								>
									<StyledTypography
										fs={1.5}
										styletype="default"
										fw={500}
										sx={{ mt: 1 }}
									>
										{data.title}
									</StyledTypography>

									<StyledTypography fs={1} styletype="default" light>
										{data.desc}
									</StyledTypography>
								</ListItem>
								{data.subtitleA ? (
									<ListItem
										key={data.subtitleA?.id}
										sx={{
											display: "flex",
											flexDirection: "column",
											alignItems: "flex-start",
										}}
									>
										<StyledTypography
											fs={1.2}
											styletype="default"
											fw={500}
											sx={{ mt: 1 }}
										>
											{data.subtitleA?.title}
										</StyledTypography>
										<ListItemText>
											<StyledTypography fs={1} styletype="default" light>
												{data.subtitleA?.desc}
											</StyledTypography>
										</ListItemText>
									</ListItem>
								) : null}
								{data.subtitleA ? (
									<List key={data.id}>
										{data.subtitleA?.infos.map((info, index) => (
											<ListItem key={index.toString()}>
												<ListItemAvatar>
													<img
														src={data.icon}
														alt="icon"
														style={{ width: "24px", height: "24px" }}
													/>
												</ListItemAvatar>
												<ListItemText>
													<StyledTypography fs={1} styletype="default">
														{info}
													</StyledTypography>
												</ListItemText>
											</ListItem>
										))}
									</List>
								) : null}
								{data.subtitleB ? (
									<>
										<ListItem
											key={data.subtitleB?.id}
											sx={{
												display: "flex",
												flexDirection: "column",
												alignItems: "flex-start",
											}}
										>
											<StyledTypography
												fs={1.2}
												styletype="default"
												fw={500}
												sx={{ mt: 1 }}
											>
												{data.subtitleB?.title}
											</StyledTypography>
											<ListItemText>
												<StyledTypography fs={1} styletype="default" light>
													{data.subtitleB?.desc}
												</StyledTypography>
											</ListItemText>
										</ListItem>
										<List key={data.id}>
											{data.subtitleB?.infos.map((info, index) => (
												<ListItem key={index.toString()}>
													<ListItemAvatar>
														<img
															src={data.icon}
															alt="icon"
															style={{ width: "24px", height: "24px" }}
														/>
													</ListItemAvatar>
													<ListItemText>
														<StyledTypography fs={1} styletype="default">
															{info}
														</StyledTypography>
													</ListItemText>
												</ListItem>
											))}
										</List>
									</>
								) : null}
							</>
						))}
					</List>
					<StyledTypography
						fs={1.5}
						styletype="default"
						fw={500}
						sx={{ mt: 1 }}
					>
						How We Use Your Information
					</StyledTypography>
					<List>
						{userInfo.map((info) => (
							<ListItem key={info.id}>
								<ListItemAvatar>
									<img
										src={info.icon}
										alt="icon"
										style={{ width: "24px", height: "24px" }}
									/>
								</ListItemAvatar>
								<StyledTypography fs={1} styletype="default" light>
									{info.desc}
								</StyledTypography>
							</ListItem>
						))}
					</List>
					<StyledTypography
						fs={1.5}
						styletype="default"
						fw={500}
						sx={{ mt: 1 }}
					>
						Third-Party Services and Advertising
					</StyledTypography>
					<StyledTypography fs={1} styletype="default" light>
						Brangsaa.com may display ads from third-party networks. These
						companies may use cookies, web beacons, or JavaScript to track your
						behavior and serve personalized ads.
					</StyledTypography>
					<StyledTypography fs={1} styletype="default" light sx={{ mt: 1 }}>
						<strong>Important Note:</strong>
						We do not control the cookies or tracking used by third-party
						advertisers. We recommend reviewing the privacy policies of those
						services for more details.
					</StyledTypography>
					<StyledTypography
						fs={1.5}
						styletype="default"
						fw={500}
						sx={{ mt: 1 }}
					>
						Links to External Websites
					</StyledTypography>
					<StyledTypography fs={1} styletype="default" light>
						Our site may contain links to other websites. We are not responsible
						for the content, privacy practices, or security of external sites.
						Please review their policies before interacting with them
					</StyledTypography>
					<StyledTypography
						fs={1.5}
						styletype="default"
						fw={500}
						sx={{ mt: 1 }}
					>
						Disclaimer of Liability
					</StyledTypography>
					<List>
						{disclaimerData.map((disclaimer) => (
							<ListItem key={disclaimer.id}>
								<ListItemAvatar>
									<img
										src={disclaimer.icon}
										alt="icon"
										style={{ width: "24px", height: "24px" }}
									/>
								</ListItemAvatar>
								<StyledTypography fs={1} styletype="default" light>
									{disclaimer.title}
								</StyledTypography>
							</ListItem>
						))}
					</List>
				</Grid>
			</Grid>
			<Grid item size={{ lg: 6 }}>
				<Box>
					<img src={images.privacy} alt="img" style={{ objectFit: "cover" }} />
				</Box>
			</Grid>
		</StyledPrivacyPolicyWrapper>
	);
};

export default PrivacyPolicy;
