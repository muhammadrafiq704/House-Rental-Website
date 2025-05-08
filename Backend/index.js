import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import AuthRoutes from "./Routes/AuthRoutes.js";
import PropertyRoutes from "./Routes/PropertyRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();

const app = express();

// Middlewares
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());

// Routes
app.use("/api", AuthRoutes);

app.use("/uploads", express.static("uploads"));
app.use("/api/properties", PropertyRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
