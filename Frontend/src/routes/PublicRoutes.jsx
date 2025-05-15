import { useAuth } from "@/context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
	const { user, token } = useAuth();
	if (token && user) return <Navigate to="/" replace />;
	return <Outlet />;
};

export default PublicRoutes;
