import { Box, Grid, styled } from "@mui/material";

export const StyledOwnersWrapper = styled(Box)({
	width: "100%",
	padding: "20px",
	display: "flex",
	flexDirection: "column",
});

export const StyledGrid = styled(Grid)(({ theme }) => ({
	borderRadius: theme.shape.customRadius.halfRounded,
	boxShadow: theme.shadows[1],
	display: "flex",
	flexDirection: "column",
	gap: "10px",
	padding: "16px",
}));
