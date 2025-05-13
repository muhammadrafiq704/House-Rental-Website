import { Box, styled } from "@mui/material";

export const StyledContactWrappper = styled(Box)({
	//   border: "1px solid red",
	padding: "20px",
	display: "flex",
	justifyContent: "space-between",
	gap: "40px",
});

export const FormWrapper = styled(Box)(({ theme }) => ({
	//   border: "1px solid red",
	borderRadius: theme.shape.customRadius.halfRounded,
	width: "100%",
	padding: "20px",
	display: "flex",
	flexDirection: "column",
	justifyContent: "center",
	alignItems: "center",
	gap: "10px",
}));
