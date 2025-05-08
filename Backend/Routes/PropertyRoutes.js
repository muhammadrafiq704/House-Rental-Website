import express from "express";
import { createProperty } from "../Controllers/Property/CreatePropertyController.js";
import upload from "../config/multer.js";

const router = express.Router();

router.post("/", upload.array("file", 5), createProperty);

export default router;
