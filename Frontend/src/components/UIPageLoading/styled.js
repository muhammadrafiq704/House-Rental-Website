import { Box, styled } from "@mui/material";

export const UIPageLoadingWrapper = styled(Box)({
	position: "fixed",
	width: "100%",
	height: "100%",
	backgroundColor: "transparent",
	zIndex: 999999,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	transform: "scale(1)",
	"& p": {
		animation: "scaling 1.5s alternate infinite ease-in",
		"@keyframes scaling": {
			"0%": { transform: "scale(1)" },
			"100%": { transform: "scale(1.3)" },
		},
	},
});
