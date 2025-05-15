import { Grid, styled } from "@mui/material";

export const BlogsWrapper = styled(Grid)({
	width: "100%",
	padding: "20px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	gap: "20px",
});

export const BlogsCardWrapper = styled(Grid)(({ theme }) => ({
	borderRadius: theme.shape.customRadius.halfRounded,
	boxShadow: theme.shadows[1],
	padding: "14px",
	width: "300px",
	display: "flex",
	cursor: "pointer",
	transition: "all 0.3s ease",
	"& img": {
		borderRadius: theme.shape.customRadius.curve,
		width: "100%",
		objectFit: "cover",
	},
	"&:hover": {
		transform: "translateY(-10px)",
		boxShadow: theme.shadows[1],
	},
}));
