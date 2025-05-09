import express from "express";
import { createProperty } from "../Controllers/Property/CreatePropertyController.js";
import { getProperties } from "../Controllers/Property/GetProperty.js";
import { getPropertyTypes } from "../Controllers/Property/PropertyCategory.js";
import { getSingleProperty } from "../Controllers/Property/SignleProperty.js";
import upload from "../config/multer.js";

const router = express.Router();

router.post("/", upload.array("file", 5), createProperty);
router.get("/", getProperties);
router.get("/:type", getPropertyTypes);
router.get("/property/:id", getSingleProperty);

export default router;
