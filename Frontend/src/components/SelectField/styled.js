import { Select, styled } from "@mui/material";

const StyledSelect = styled(Select)(({ theme, error }) => ({
	"&.MuiInputBase-root": {
		"& > .MuiOutlinedInput-input": {
			paddingTop: "12px",
			paddingBottom: "12px",
		},
		"& .MuiOutlinedInput-notchedOutline": {
			borderColor: error ? "red" : theme.palette.border.primary,
		},

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

export default StyledSelect;
