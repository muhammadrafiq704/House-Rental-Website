import { styled } from "@mui/material";

export const StyledErrorBoundaryWrapper = styled("div")({
	minWidth: "100dvw",
	minHeight: "100dvh",
	display: "flex",
	justifyContent: "center",
	"& div": {
		display: "flex",
		justifyContent: "center",
		gap: "10px",
		alignItems: "center",
		flexDirection: "column",
	},
});
