import { Box, styled } from "@mui/material";

const StyledAuthWrapper = styled(Box)(({ theme }) => ({
	minWidth: "100dvh",
	minHeight: "100dvh",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	fontFamily: theme.typography.fontFamily,
}));

export { StyledAuthWrapper };
