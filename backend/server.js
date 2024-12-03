import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.routes.js";
import messageRouter from "./routes/messages.routes.js";
import connectToMongoDb from "./db/connectToMongoDb.js";
import protectRoute from "./middlewares/protectRoute.js";
import usersRoute from "./routes/users.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/messages", protectRoute, messageRouter);
app.use("/api/users", protectRoute, usersRoute);

app.listen(PORT, () => {
  connectToMongoDb();
  console.log(`Server is running on port ${PORT}`);
});
