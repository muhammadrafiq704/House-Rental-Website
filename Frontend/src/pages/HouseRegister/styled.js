import { Grid, styled } from "@mui/material";

export const HouseRegisterWrapper = styled(Grid)(({ theme }) => ({
	//   border: "1px solid red",
	padding: "10px 40px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	margin: "10px 20px 20px 20px",
	borderRadius: theme.shape.customRadius.halfRounded,
	boxShadow: theme.shadows[1],
}));
