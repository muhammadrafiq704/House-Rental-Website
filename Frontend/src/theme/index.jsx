import { createTheme } from "@mui/material";

export const appTheme = createTheme({
	palette: {
		primary: { main: "#F2EFE7", shade1: "" },
		mainBG: "#F2EFE7",
		button: {
			primary: "#006A71",
			secondary: "#9ACBD0",
		},
		border: {
			primary: "#48A6A7",
		},
		text: {
			primary: "#2C2C2C",
			secondary: "#fff",
			shade1: "#9ACBD0",
			shade2: "#48A6A7",
		},
	},
	typography: {
		fontSize: 12,
		fontFamily: "'Nunito', 'sans-serif'",
	},
	shape: {
		borderRadius: 8,
		customRadius: {
			rounded: "40px",
			halfRounded: "14px",
			curve: "10px",
		},
	},
	shadows: [
		"none",
		"rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
		"0px 2px 5px rgba(38, 51, 77, 0.3)",
	],
});
