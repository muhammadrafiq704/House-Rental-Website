import { Box, styled } from "@mui/material";

export const StyledProfileDashboard = styled(Box)({
	width: "100%",
	display: "flex",
	justifyContent: "flex-start",
	alignItems: "center",
	// border:'1px solid red',
	gap: "20px",
});
export const StyledPropertiesCardWrapper = styled(Box)(({ theme }) => ({
	display: "flex",
	flexDirection: "column",
	justifyContent: "flex-start",
	alignItems: "flex-start",
	gap: "10px",
	// border:'1px solid blue',
	width: "270px",
	borderRadius: "20px",
	padding: "10px",
	boxShadow: theme.shadows[1],
	position: "relative",
	"& img": {
		width: "100%",
		objectFit: "cover",
		borderRadius: "20px",
	},
}));
