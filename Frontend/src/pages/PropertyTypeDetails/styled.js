import { Box, styled } from "@mui/material";

export const StyledPropertyDetailsWrapper = styled(Box)(({ theme }) => ({
	width: "100%",
	display: "flex",
	gap: "40px",
	marginBottom: "20px",
	padding: "20px",
	border: "1px solid red",
	"& img": {
		width: "800px",
		height: "400px",
		borderRadius: theme.shape.customRadius.halfRounded,
	},
}));
