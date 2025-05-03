import { Box, styled } from "@mui/material";

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

export const StyledCategoriesCard = styled(Box)(({ theme }) => ({
	padding: "10px",
	width: "150px",
	height: "150px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	gap: "10px",
	justifyContent: "center",
	border: `2px solid ${theme.palette.text.primary}`,
	borderRadius: theme.shape.customRadius.halfRounded,
	cursor: "pointer",
}));
