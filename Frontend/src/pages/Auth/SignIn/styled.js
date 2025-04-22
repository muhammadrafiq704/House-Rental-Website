import { Box, styled } from "@mui/material";

export const StyledAuthCardWrapper = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	gap: "20px",
	// border: "1px solid red",
	padding: "16px",
	[theme.breakpoints.between("tablet", "laptop")]: {
		display: "flex",
		flexDirection: "column",
		border: "1px solid green",
	},
}));
export const StyledFormWrapper = styled(Box)(({ theme }) => ({
	width: "500px",
	height: "450px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	// border: "1px solid red",
	padding: "4px",
	borderRadius: theme.shape.customRadius.curve,
	boxShadow: theme.shadows[1],
	overflow: "auto",
}));
export const StyledLinkWrapper = styled(Box)(({ theme }) => ({
	width: "500px",
	height: "450px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	gap: "40px",
	padding: "10px",
	borderRadius: theme.shape.customRadius.curve,
	boxShadow: theme.shadows[1],
}));
