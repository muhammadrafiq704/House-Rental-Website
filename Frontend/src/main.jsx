import appRoutes from "@/routes/rotues";
import { appTheme } from "@/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from "react-router-dom";

const root = document.getElementById("root");

if (!root) {
	throw new Error("Root element not found");
}

const router = createBrowserRouter(createRoutesFromElements(appRoutes));

createRoot(root).render(
	<StrictMode>
		<ThemeProvider theme={appTheme}>
			<CssBaseline enableColorScheme />
			<RouterProvider router={router} fallbackElement={<div>Loading...</div>} />
		</ThemeProvider>
	</StrictMode>,
);
