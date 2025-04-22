import { Box, Typography, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const StyledTypography = styled(Typography)(
	({ theme, fs, fw, styleType, maxlines, light }) => ({
		fontSize: fs ? `${fs}rem` : "1rem",
		fw: fw ? fw : "400",
		color:
			styleType === "inverted"
				? theme.palette.text.primary
				: styleType === "standard"
					? theme.palette.text.secondary
					: styleType,
		...(light &
			{
				opacity: 0.7,
			}),
		...(maxlines &
			{
				display: "-webkit-box",
				WebkitLineClamp: maxlines,
				WebkitBoxOrient: "vertical",
				overflow: "hidden",
			}),
	}),
);

export const FlexBetween = styled(Box)({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	gap: "20px",
});

export const StyledNavlink = styled(NavLink)(({ theme }) => ({
	textDecoration: "none",
	color: theme.palette.button.primary,
	fontWeight: 600,
	display: "block",
}));
