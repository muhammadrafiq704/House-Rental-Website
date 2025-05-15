import { Box, Grid, styled } from "@mui/material";

export const StyledCategoriesWrapper = styled(Box)({
	padding: "0 20px 0 20px",
	width: "100%",
	display: "flex",
	flexWrap: "wrap",
	gap: "20px",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
});

export const StyledCategoriesCard = styled(Grid)(({ theme }) => ({
	height: "300px",
	display: "flex",
	flexWrap: "wrap",
	alignItems: "center",
	gap: "10px",
	justifyContent: "center",
	position: "relative",
	borderRadius: theme.shape.customRadius.halfRounded,
	cursor: "pointer",
	"& img": {
		transition: "opacity 0.3s ease",
		width: "100%",
		height: "100%",
		objectFit: "cover",
		borderRadius: "10px",
	},
	"&:hover img": {
		opacity: 0.7,
	},
}));
