import ErrorBoundary from "@/pages/components/ErrorBoundary";
import { Route } from "react-router-dom";
import App from "../App";
import appPaths from "../utils/appRoutePaths";

const appRoutes = (
	<Route
		path={appPaths.ROOT}
		element={<App />}
		errorElement={<ErrorBoundary />}
	>
		<Route index lazy={() => import("@/pages/Home")} />
		<Route path={appPaths.ABOUT_US} lazy={() => import("@/pages/AboutUS")} />
	</Route>
);

export default appRoutes;
