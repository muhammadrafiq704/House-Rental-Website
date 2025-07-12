import { HouseRentalAPI } from "@/api/HouseRental";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useCallback } from "react";
import { toast } from "react-toastify";

const AuthContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [token, setToken] = useState(localStorage.getItem("token") || null);
	const [isLoading, setIsLoading] = useState(false);

	// console.log("user", user);
	// console.log("token", token);

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
			toast.error("Failed to fetch user", error.response?.data?.message);
			// logout();
		} finally {
			setIsLoading(false);
		}
	}, [token]);

	useEffect(() => {
		fetchUser();
	}, [fetchUser]);

	return (
		<AuthContext.Provider value={{ user, token, login, logout, isLoading }}>
			{children}
		</AuthContext.Provider>
	);
};
