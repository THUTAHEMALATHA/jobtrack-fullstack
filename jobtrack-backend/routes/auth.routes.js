import express from "express";
import { signup, login } from "../controllers/auth.controller.js";
import { getAllUsers } from "../controllers/auth.controller.js";
import { verifyToken } from "../middleware/auth.middleware.js";
import { getProfile } from "../controllers/auth.controller.js";

const router = express.Router();


router.post("/signup", signup);
router.post("/login", login);
router.get("/all-users", getAllUsers);
router.get("/profile", verifyToken, getProfile);

export default router;
