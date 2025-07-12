import UIPageLoading from "@/components/UIPageLoading/UIPageLoading";
import { useAuth } from "@/context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
	const { user, token, isLoading, logout } = useAuth();

	if (!token) return <Navigate to="/sign-in" replace />;
	if (isLoading) return <UIPageLoading />;
	if (!user) {
		logout();
		return <Navigate to="/sign-in" replace />;
	}
	return <Outlet />;
};

export default PrivateRoutes;
