import { StyledTypography } from "@/styled";
import { Box } from "@mui/material";
import OwnersCard from "./OwnersCard";
import { StyledOwnersWrapper } from "./styled";

const Owners = () => {
	return (
		<StyledOwnersWrapper>
			<Box
				sx={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					//   gap: "2px",
				}}
			>
				<StyledTypography fs={0.9} styletype="default" fw={500}>
					Highlight the most popular owners
					<hr />
				</StyledTypography>
				<StyledTypography fs={1.8} styletype="default" fw={650}>
					Verified Owners
				</StyledTypography>
			</Box>
			<OwnersCard />
		</StyledOwnersWrapper>
	);
};

export default Owners;
