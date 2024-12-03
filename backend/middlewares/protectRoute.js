import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";

/**
 *This middleware ensures user is logged in and attaches `user` in `req`
 */
const protectRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res.status(401).json({ error: "Unauthorized - Login first" });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - Invalid token" });
    }

    const user = await UserModel.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ error: "Unauthorized - Invalid user" });
    }
    req.user = user;
    next();
  } catch (e) {
    console.error(`Error in protectRoute middleware: ${e}`);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export default protectRoute;
