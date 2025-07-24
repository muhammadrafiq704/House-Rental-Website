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

// Middlewares
app.use(cookieParser());
app.use(bodyParser.json());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));

// Routes
app.use("/api/auth", AuthRoutes);

app.use("/uploads", express.static("uploads"));
app.use("/api/properties", PropertyRoutes);
app.use("/api/profile-dashboard", ProfileDashboardRoutes);

// Start Server

export default app; // ES Module
