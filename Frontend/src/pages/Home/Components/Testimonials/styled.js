import { Grid, styled } from "@mui/material";

export const StyledTestimonialsWrapper = styled(Grid)({
	width: "100%",
	padding: "20px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	justifyContent: "center",
});
export const TestimonialsCardWrapper = styled(Grid)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	flexDirection: "column",
	width: "300px",
	height: "300px",
	padding: "10px",
	gap: "10px",
	// border:'1px solid red',
	borderRadius: theme.shape.customRadius.halfRounded,
	boxShadow: theme.shadows[1],
	transition: "all 0.3s ease",
	"&:hover": {
		transform: "translateY(-10px)",
		boxShadow: theme.shadows[1],
	},
}));
