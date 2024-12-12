import express from "express";
import { getUserForSideBar } from "../controllers/users.controller.js";
import protectRoute from "../middlewares/protectRoute.js";
const router = express.Router();

router.get("/", protectRoute, getUserForSideBar);

export default router;
