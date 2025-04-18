import ErrorBoundary from "@/components/ErrorBoundary";
import AppLayout from "@/layout/AppLayout";
import { Route } from "react-router-dom";
import App from "../App";
import appPaths from "../utils/appRoutePaths";

const appRoutes = (
	<Route
		path={appPaths.ROOT}
		element={<App />}
		errorElement={<ErrorBoundary />}
	>
		<Route element={<AppLayout />}>
			<Route index lazy={() => import("@/pages/Home")} />
			<Route path={appPaths.ABOUT_US} lazy={() => import("@/pages/AboutUS")} />
		</Route>
	</Route>
);

export default appRoutes;
