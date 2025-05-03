import { images } from "@/assets";
import { Box, Grid, styled } from "@mui/material";

export const StyledHeroWrapper = styled(Box)({
	//   border: '1px solid red',
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "100%",
	height: "100dvh",
	backgroundImage: `url(${images.hero})`,
	backgroundRepeat: "no-repeat",
	backgroundPosition: "center",
	backgroundSize: "cover",
	position: "relative",
	overflow: "hidden",
	"&::after": {
		content: '""',
		position: "absolute",
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		background:
			"linear-gradient(to right, rgba(0, 106, 113, 0.9), rgba(0, 106, 113, 0))",
		zIndex: 0,
	},
});
