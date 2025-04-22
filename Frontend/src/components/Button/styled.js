import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const StyledContainedButton = styled(Button)(
	({ theme, fs, styletype }) => ({
		backgroundColor: theme.palette.button.primary,
		// backgroundColor:"transparent",
		color:
			styletype === "inverter"
				? theme.palette.button.primary
				: styletype === "standard"
					? theme.palette.button.secondary
					: styletype,
		fontSize: fs || "1rem",
		fontWeight: 500,
		minHeight: 45,
		minWidth: 65,
		// maxWidth: 65,
		textTransform: "capitalize",
		paddingLeft: "1em",
		paddingRight: "1em",
		boxShadow: theme.shadows[1],
		borderRadius: theme.shape.customRadius.rounded,
	}),
);

export const StyledOutlinedButton = styled(Button)(
	({ theme, fs, styletype }) => ({
		backgroundColor: "transparent",
		color:
			styletype === "default"
				? theme.palette.button.secondary
				: styletype === "inverted"
					? theme.palette.button.primary
					: theme.palette.button.primary,
		fontSize: fs || "1rem",
		outline: `1px solid ${theme.palette.button.primary}`,
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

export const StyledOutlinedIconButton = styled(Button)(({ theme }) => ({
	backgroundColor: "transparent",
	color: theme.palette.text.primary,
	minWidth: 45,
	maxWidth: 45,
	minHeight: 45,
	maxHeight: 45,
	width: "100%",
	height: "100%",
	borderRadius: theme.shape.borderRadius,
	textTransform: "capitalize",
	fontWeight: 500,
	boxShadow: theme.shadows[1],
}));

export const StyledContainedIconButton = styled(Button)(({ theme }) => ({
	backgroundColor: "transparent",
	minWidth: 45,
	maxWidth: 45,
	minHeight: 45,
	maxHeight: 45,
	width: "100%",
	height: "100%",
	backgroundImage: "radial-gradient(at top left, #9ACBD0, #006A71 80%)",
	color: theme.palette.text.shade2,
	borderRadius: theme.shape.borderRadius,
	fontWeight: 500,
	textTransform: "capitalize",
	boxShadow: theme.shadows[1],
}));
