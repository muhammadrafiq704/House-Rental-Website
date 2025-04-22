import { TextField, styled } from "@mui/material";

const StyledOutlinedInput = styled(TextField)(({ theme, error }) => ({
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			border: `2px solid ${error ? "#ff8080" : "#F5F6F7"} !important`,
			borderRadius: theme.shape.borderRadiusRound,
			boxShadow: theme.shadows[2],
		},

		"&:hover fieldset": {
			borderColor: error ? "#ff8080" : "transparent",
		},

		"&.Mui-focused fieldset": {
			borderColor: error ? "#ff8080" : "transparent",
		},
	},
}));

export default StyledOutlinedInput;
