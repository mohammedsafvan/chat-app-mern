import jwt from "jsonwebtoken";

export default function generateTokenAndSetCookie(userId, res) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    maxAge: 15 * 24 * 60 * 60 * 1000,
    sameSite: true,
    secure: process.env.NODE_ENV !== "development" ? false : true,
  });
}
