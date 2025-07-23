import { Box, styled } from "@mui/material";

const StyledAuthWrapper = styled(Box)(({ theme }) => ({
	width: "100dvw",
	height: "100dvh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	// border: "4px solid red",
	fontFamily: theme.typography.fontFamily,
	overflow: "hidden",
}));

export { StyledAuthWrapper };
