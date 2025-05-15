import { HouseRentalAPI } from "@/api/HouseRental";
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState({});
	const [token, setToken] = useState(localStorage.getItem("token") || null);
	const [isLoading, setIsLoading] = useState(false);

	const login = (token, user) => {
		setToken(token);
		setUser(user);
		setIsLoading(true);
		localStorage.setItem("token", token);
	};

	const logout = () => {
		setUser(null);
		setToken(null);
		localStorage.removeItem("token");
	};

	return (
		<AuthContext.Provider value={{ user, token, login, logout, isLoading }}>
			{children}
		</AuthContext.Provider>
	);
};
