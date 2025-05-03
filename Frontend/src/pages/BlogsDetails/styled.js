import { Box, styled } from "@mui/material";

export const BlogsDetailsWrapper = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "flex-start",
	gap: "40px",
	padding: "20px",
	width: "100%",
	border: "1px solid red",
	"& img": {
		width: "100%",
		borderRadius: theme.shape.customRadius.halfRounded,
	},
}));
