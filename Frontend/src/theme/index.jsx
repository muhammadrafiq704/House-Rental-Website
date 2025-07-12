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
			primary: "#006A71",
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
		"0px 1px 2px rgba(0, 106, 113, 0.3), 0px 1px 3px 1px rgba(0, 106, 113, 0.15)",
		"0px 2px 5px rgba(0, 106, 113, 0.3)",
	],
	breakpoints: {
		values: {
			xs: 0,
			sm: 430,
			md: 786,
			lg: 1024,
			xl: 1440,
		},
	},
});
