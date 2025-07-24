import { Box, styled } from "@mui/material";

export const StyledProfileLayout = styled(Box)({
	width: "100%",
	display: "flex",
	gap: "40px",
	justifyContent: "center",
	alignItems: "flex-start",
	// border: "2px solid green",
	padding: "10px 20px 10px 20px",
	overflow: "hidden",
});

export const StyledCardWrapper = styled(Box)(({ theme }) => ({
	width: "450px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "20px",
	boxShadow: theme.shadows[1],
	borderRadius: theme.shape.customRadius.halfRounded,
	padding: "10px 10px 16px 10px",
	"& img": {
		width: "94px",
		height: "94px",
		borderRadius: "50%",
		objectFit: "cover",
	},
}));
