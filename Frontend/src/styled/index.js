import { Typography, styled } from "@mui/material";

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
