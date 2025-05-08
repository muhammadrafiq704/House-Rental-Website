import ErrorBoundary from "@/components/ErrorBoundary";
import AppLayout from "@/layout/AppLayout";
import AuthLayout from "@/layout/AuthLayout";
import { Route } from "react-router-dom";
import App from "../App";
import appPaths from "../utils/appRoutePaths";
import PublicRoutes from "./PublicRoutes";

const appRoutes = (
	<Route
		path={appPaths.ROOT}
		element={<App />}
		errorElement={<ErrorBoundary />}
	>
		{/* <Route element={<PublicRoutes />}> */}
		<Route element={<AuthLayout />}>
			<Route
				path={appPaths.SIGN_IN}
				lazy={() => import("@/pages/Auth/SignIn")}
			/>
			<Route
				path={appPaths.SIGN_UP}
				lazy={() => import("@/pages/Auth/SignUp")}
			/>
			<Route
				path={appPaths.FORGOT_PASSWORD}
				lazy={() => import("@/pages/Auth/ForgotPassword")}
			/>
		</Route>
		{/* </Route> */}
		<Route element={<AppLayout />}>
			<Route index lazy={() => import("@/pages/Home")} />
			<Route path={appPaths.ABOUT_US} lazy={() => import("@/pages/AboutUS")} />
			<Route path={appPaths.HOUSES} lazy={() => import("@/pages/Houses")} />
			<Route
				path={appPaths.BLOGS}
				lazy={() => import("@/pages/Home/Components/Blogs")}
			/>
			<Route
				path={appPaths.BLOGS_DETAILS}
				lazy={() => import("@/pages/BlogsDetails")}
			/>
			<Route
				path={appPaths.CONTACT_US}
				lazy={() => import("@/pages/ContactUs")}
			/>
			<Route path={appPaths.PLOTS} lazy={() => import("@/pages/Plots")} />
			<Route
				path={appPaths.PROPERTY_REGISTER}
				lazy={() => import("@/pages/HouseRegister")}
			/>
		</Route>
		<Route path={appPaths.ERROR} element={<ErrorBoundary />} />
	</Route>
);

export default appRoutes;
