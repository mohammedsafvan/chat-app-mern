import express from "express";
import { getUserForSideBar } from '../controllers/users.controller.js'
const router = express.Router();

router.get("/", getUserForSideBar);

export default router;
