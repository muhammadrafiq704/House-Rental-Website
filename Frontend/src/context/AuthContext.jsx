/* eslint-disable react-refresh/only-export-components */
import { HouseRentalAPI } from "@/api/HouseRental";
import React, {
	createContext,
	useContext,
	useEffect,
	useState,
	useCallback,
} from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [token, setToken] = useState(localStorage.getItem("token") || null);
	const [isLoading, setIsLoading] = useState(false);
	const [favorites, setFavorites] = useState([]);

	const login = (token) => {
		setToken(token);
		localStorage.setItem("token", token);
	};

	const logout = () => {
		setUser(null);
		setToken(null);
		localStorage.removeItem("token");
	};

	const fetchUser = useCallback(async () => {
		if (!token) return;
		try {
			setIsLoading(true);
			const response = await HouseRentalAPI.get("auth/user/me", {
				headers: { Authorization: `Bearer ${token}` },
			});
			setUser(response.data?.data);
		} catch (error) {
			toast.error("Failed to fetch user", error.response.message);
		} finally {
			setIsLoading(false);
		}
	}, [token]);

	const fetchFavorites = useCallback(async () => {
		if (!user?._id) return;
		try {
			const response = await HouseRentalAPI.get(
				`profile-dashboard/${user._id}`,
			);
			setFavorites(response.data);
		} catch (error) {
			console.error("Error fetching favorites", error);
		}
	}, [user?._id]);

	useEffect(() => {
		fetchUser();
	}, [fetchUser]);

	useEffect(() => {
		if (user?._id) {
			fetchFavorites();
		}
	}, [user?._id, fetchFavorites]);

	return (
		<AuthContext.Provider
			value={{
				user,
				token,
				login,
				logout,
				isLoading,
				favorites,
				fetchFavorites, // expose to manually refresh favorites after toggle
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
