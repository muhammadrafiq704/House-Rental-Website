import { images } from "@/assets";
import { StyledTypography } from "@/styled";
import { Box, Grid } from "@mui/material";
import { StyledGrid } from "./styled";
import { dummyOwners } from "./utils";

const OwnersCard = () => {
	//   const visibleOwners = dummyOwners.slice(0, 4);

	return (
		<Grid container spacing={2} sx={{ pl: 2, pr: 2 }}>
			{dummyOwners?.map((owner) => (
				<StyledGrid size={{ xl: 6, md: 4, sm: 8 }} key={owner.id}>
					<Box
						sx={{
							display: "flex",
							gap: "10px",
							alignItems: "center",
							position: "relative",
						}}
					>
						<img
							src={owner.image}
							alt="owner-img"
							style={{
								width: "100%",
								height: "100%",
								objectFit: "cover",
							}}
						/>
						<img
							src={images.verified}
							alt="verify-icon"
							style={{ position: "absolute", top: 10, right: 10 }}
						/>
					</Box>
					<StyledTypography fs={1.1} styletype="default" fw={600}>
						{owner.name}
					</StyledTypography>
					<Box sx={{ display: "flex", gap: "4px" }}>
						<img src={owner.rating} alt="icon" width={16} />
						<img src={owner.rating} alt="icon" width={16} />
						<img src={owner.rating} alt="icon" width={16} />
						<img src={owner.rating} alt="icon" width={16} />
						<img src={owner.rating} alt="icon" width={16} />
					</Box>
				</StyledGrid>
			))}
		</Grid>
	);
};

export default OwnersCard;
