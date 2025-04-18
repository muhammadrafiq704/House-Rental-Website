import { Box, styled } from "@mui/material";

const StyledAppWrapper = styled("div")(({ theme }) => ({
	minWidth: "100dvh",
	minHeight: "100dvh",
	backgroundColor: theme.palette.primary.main,
}));

const StyleHeaderWrapper = styled(Box)(({ theme }) => ({
	minWidth: "100dvh",
	minHeight: "10dvh",
	backgroundColor: theme.palette.primary.shade1,
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	padding: "0 20px 0 20px",
	position: "-webkit-sticky",
	top: 0,
	gap: "10px",
	boxShadow: theme.shadows[1],
	"& a": {
		textDecoration: "none",
		fontWeight: 600,
		fontSize: "16px",
	},
}));

export { StyledAppWrapper, StyleHeaderWrapper };
