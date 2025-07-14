import { icons, images } from "@/assets";
import { StyledTypography } from "@/styled";
import {
	Avatar,
	Box,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
} from "@mui/material";
import { StyledContactWrappper } from "./styled";
import { AboutData, missionData, offerData, safetyData } from "./utils";

const Home = () => {
	return (
		<StyledContactWrappper>
			<Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
				<StyledTypography fs={1} styletype="default" light>
					Welcome to Brangsaa.com – Gilgit-Baltistan’s First Free Real Estate
					Platform. Brangsaa.com is the first of its kind dedicated online
					property portal made specifically for the beautiful region of
					Gilgit-Baltistan, with a special focus on Skardu. Whether you're
					looking to buy, sell, or rent property – homes, shops, land, or
					commercial plots – Brangsaa.com connects you directly with real
					people, without any fees, commissions, or middlemen.
				</StyledTypography>
				<StyledTypography fs={1.5} fw={500} styletype="default" sx={{ mt: 1 }}>
					Our Vision
				</StyledTypography>
				<List>
					<ListItem>
						<ListItemAvatar>
							<img
								src={icons.hand}
								alt="icon"
								style={{ width: "24px", height: "24px" }}
							/>
						</ListItemAvatar>
						<StyledTypography fs={1} styletype="default" light>
							To create a transparent, safe, and easily accessible digital
							property marketplace for the people of Gilgit-Baltistan –
							empowering locals and investors to make informed property
							decisions without stress or risk.
						</StyledTypography>
					</ListItem>
				</List>
				<StyledTypography fs={1.5} fw={500} styletype="default" sx={{ mt: 1 }}>
					Our Mission
				</StyledTypography>
				<List>
					{missionData.map((mission) => (
						<ListItem key={mission.id}>
							<ListItemAvatar>
								<img
									src={mission.icon}
									alt="icon"
									style={{ width: "24px", height: "24px" }}
								/>
							</ListItemAvatar>
							<StyledTypography fs={1} styletype="default" light>
								{mission.desc}
							</StyledTypography>
						</ListItem>
					))}
				</List>
				<StyledTypography fs={1.5} fw={500} styletype="default" sx={{ mt: 1 }}>
					What we Offer
				</StyledTypography>
				<List>
					{offerData.map((offer) => (
						<>
							<ListItem key={offer.id}>
								<StyledTypography
									fs={1}
									fw={600}
									styletype="default"
									sx={{ mt: 1 }}
								>
									{offer.title}
								</StyledTypography>
							</ListItem>
							<ListItem key={offer.id}>
								<ListItemAvatar>
									<img
										src={offer.icon}
										alt="icon"
										style={{ width: "24px", height: "24px" }}
									/>
								</ListItemAvatar>
								<StyledTypography fs={1} styletype="default" light>
									{offer.desc}
								</StyledTypography>
							</ListItem>
						</>
					))}
				</List>

				<StyledTypography fs={1.5} fw={500} styletype="default" sx={{ mt: 1 }}>
					Why Brangsaa
				</StyledTypography>
				<StyledTypography fs={1} styletype="default" light>
					“Brangsaa” is a local word rooted in the culture of Gilgit-Baltistan,
					symbolizing home, place, belonging, and connection. That’s what we aim
					to build – a place where people of the region can come together to
					buy, sell, and grow.
				</StyledTypography>
				<StyledTypography fs={1.5} fw={500} styletype="default" sx={{ mt: 1 }}>
					Important Note on Client Safety!
				</StyledTypography>
				<StyledTypography fs={1} styletype="default">
					Brangsaa.com is just a listing platform. We do not verify listings or
					users. We do not guarantee any deal. We strongly recommend that you:
				</StyledTypography>
				<List>
					{safetyData.map((data) => (
						<ListItem key={data.id}>
							<ListItemAvatar>
								<img
									src={data.icon}
									alt="icon"
									style={{ width: "24px", height: "24px" }}
								/>
							</ListItemAvatar>
							<StyledTypography fs={1} styletype="default" light>
								{data.desc}
							</StyledTypography>
						</ListItem>
					))}
				</List>
				<StyledTypography fs={1} styletype="default" fw={500}>
					Brangsaa.com is not responsible for any kind of loss, fraud, or
					dispute between users.
				</StyledTypography>
				<StyledTypography fs={1.5} fw={500} styletype="default" sx={{ mt: 1 }}>
					Our Services
				</StyledTypography>
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "flex-start",
						alignItems: "center",
						columnGap: "20px",
						rowGap: "10px",
						width: "100%",
						p: 1,
					}}
				>
					{AboutData.map((contact) => (
						<Box
							key={contact.id}
							sx={{
								display: "flex",
								alignItems: "center",
								border: "1px solid #006A71",
								borderRadius: "50px",
								p: 1,
							}}
						>
							<StyledTypography fs={1} styletype="default" light>
								{contact.title}
							</StyledTypography>
						</Box>
					))}
				</Box>
			</Box>
			<Box>
				<img
					src={images.hero}
					alt="img"
					width={500}
					height={400}
					style={{ borderRadius: "20px" }}
				/>
			</Box>
		</StyledContactWrappper>
	);
};

export default Home;
