import { Box, styled } from "@mui/material";

export const StyledHousesWrapper = styled("div")({
	width: "100%",
	padding: "20px",
	//   border: "1px solid red",
});
export const StyledHousesCardWrapper = styled(Box)(({ theme }) => ({
	width: "100%",
	borderRadius: theme.shape.customRadius.halfRounded,
	boxShadow: theme.shadows[1],
	marginBottom: "16px",
	"& img": {
		borderRadius: theme.shape.customRadius.curve,
		objectFit: "cover",
	},
}));

export const StyledAdvertismentCard = styled(Box)(({ theme }) => ({
	padding: "10px",
	borderRadius: theme.shape.customRadius.halfRounded,
	boxShadow: theme.shadows[1],
	// border: "1px solid red",
	"& img": {
		borderRadius: theme.shape.customRadius.curve,
		objectFit: "cover",
	},
}));
