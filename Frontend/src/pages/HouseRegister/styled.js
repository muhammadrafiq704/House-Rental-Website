import { Grid, styled } from "@mui/material";

export const HouseRegisterWrapper = styled(Grid)(({ theme }) => ({
	padding: "10px 40px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
	margin: "10px 20px 20px 20px",
	backgroundColor: "white",
	borderRadius: theme.shape.customRadius.halfRounded,
	boxShadow: theme.shadows[2],
}));
