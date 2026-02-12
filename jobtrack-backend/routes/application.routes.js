import express from "express";
import {
  createApplication,
  getApplications,
  updateApplication,
  deleteApplication
} from "../controllers/application.controller.js";

import { verifyToken } from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", verifyToken, createApplication);
router.get("/", verifyToken, getApplications);
router.patch("/:id", verifyToken, updateApplication);
router.delete("/:id", verifyToken, deleteApplication);

export default router;
