import express from "express";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
const router = express.Router();

router.post("/send/:id", sendMessage);
router.get("/:id", getMessages);
export default router;
