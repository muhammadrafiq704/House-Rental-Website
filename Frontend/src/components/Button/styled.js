import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const StyledContainedButton = styled(Button)(
	({ theme, fs, styletype }) => ({
		backgroundColor: theme.palette.button.primary,
		color:
			styletype === "inverter"
				? theme.palette.button.primary
				: styletype === "standard"
					? theme.palette.button.secondary
					: styletype,
		fontSize: fs || "1rem",
		fontWeight: 500,
		minHeight: 45,
		minWidth: 45,
		textTransform: "capitalize",
		paddingLeft: "1em",
		paddingRight: "1em",
		boxShadow: theme.shadows[1],
		borderRadius: theme.shape.customRadius.rounded,
	}),
);
