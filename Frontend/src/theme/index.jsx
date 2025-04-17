import { createTheme } from "@mui/material";

export const appTheme = createTheme({
	palette: {
		primary: { main: "#ffff", shade1: "" },
		mainBG: "#ffff",
		button: {
			primary: "#fg34fgs",
		},
		// border: {
		//   primary: "",
		// },
		// text: {
		//   primary: "",
		//   secondary: "",
		//   shade1: "",
		//   shade2: "",
		// },
	},
	typography: {
		fontSize: 12,
		fontFamily: "'Poppins', 'sans-serif'",
	},
});
