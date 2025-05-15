import { Box, styled } from "@mui/material";

export const BlogsDetailsWrapper = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "flex-start",
	gap: "40px",
	padding: "20px",
	width: "100%",
	"& img": {
		width: "500px",
		height: "300px",
		objectFit: "cover",
		borderRadius: theme.shape.customRadius.halfRounded,
	},
}));
