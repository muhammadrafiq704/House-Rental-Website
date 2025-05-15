import { Box, Grid, styled } from "@mui/material";

export const StyledSolutionsWrapper = styled(Box)({
	width: "100%",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	padding: "20px",
});
export const StyledSolutionsCard = styled(Grid)(({ theme }) => ({
	width: "100%",
	boxShadow: theme.shadows[1],
	borderRadius: theme.shape.customRadius.halfRounded,
	transition: "all 0.3s ease",
	"&:hover": {
		transform: "translateY(-10px)",
		boxShadow: theme.shadows[1],
	},
}));
