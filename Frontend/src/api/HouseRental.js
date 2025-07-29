import axios from "axios";

export const HouseRentalAPI = axios.create({
	baseURL: "http://localhost:8000/api/",
	// baseURL: "https://house-rental-apis.vercel.app/",
	withCredentials: true,
});
