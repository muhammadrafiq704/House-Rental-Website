import { Box, Typography, styled } from "@mui/material";
import { NavLink } from "react-router-dom";

export const StyledTypography = styled(Typography)(
	({ theme, fs, fw, styletype, maxlines, light }) => ({
		fontSize: fs ? `${fs}rem` : "1rem",
		fontWeight: fw ? fw : "400",

		color:
			styletype === "default"
				? theme.palette.text.primary
				: styletype === "standard"
					? theme.palette.text.secondary
					: "white",
		...(light && {
			opacity: 0.7,
		}),
		...(maxlines && {
			display: "-webkit-box",
			WebkitLineClamp: maxlines,
			WebkitBoxOrient: "vertical",
			overflow: "hidden",
		}),
	}),
);

export const FlexBetween = styled(Box)(({ gap, direction }) => ({
	display: "flex",
	justifyContent: "center",
	alignItems: direction ? "flex-start" : "center",
	flexDirection: direction || "",
	gap: gap || "8px",
}));

export const StyledNavlink = styled(NavLink)({
	position: "relative",
	textDecoration: "none",
	color: "#006A71",
	fontWeight: 600,
	fontSize: "16px",
	paddingBottom: "4px",
	transition: "color 0.3s ease, font-size 0.3s ease",
	"&::after": {
		content: '""',
		position: "absolute",
		left: 0,
		bottom: 0,
		height: "2px",
		width: "0%",
		backgroundColor: "#006A71",
		transition: "width 0.3s ease",
	},
	"&:hover::after": {
		width: "100%",
	},
});
