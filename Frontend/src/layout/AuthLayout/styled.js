import { Box, styled } from "@mui/material";

const StyledAuthWrapper = styled(Box)(({ theme }) => ({
	width: "100",
	height: "100dvh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	// border: "3px solid green",
	fontFamily: theme.typography.fontFamily,
}));

export { StyledAuthWrapper };
