import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import AuthRoutes from "./Routes/AuthRoutes.js";
import PropertyRoutes from "./Routes/PropertyRoutes.js";
import ProfileDashboardRoutes from "./Routes/profile-dashboard/ProfileDashboardRoutes.js";

import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cookieParser());
app.use(bodyParser.json());

const whitelist = [
	"http://localhost:5173",
	"https://house-rental-website-five.vercel.app/",
];

app.use(
	cors({
		origin: (origin, callback) => {
			if (whitelist.includes(origin) || !origin) {
				callback(null, true);
			} else {
				callback(new Error("Not allowed by CORS"));
			}
		},
		credentials: true,
	}),
);

// Routes
app.use("/api/auth", AuthRoutes);

app.use("/uploads", express.static("uploads"));
app.use("/api/properties", PropertyRoutes);
app.use("/api/profile-dashboard", ProfileDashboardRoutes);

// Start Server

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
