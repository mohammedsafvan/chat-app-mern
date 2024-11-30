import UserModel from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateToken from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmpassword, gender } = req.body;

    console.log(req.body);

    if (password !== confirmpassword) {
      return res.status(400).json({ error: "Password do not match" });
    }

    const user = await UserModel.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "Username already exists" });
    }

    // hash password
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyAvatar = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlAvatar = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = new UserModel({
      fullName,
      username,
      email,
      gender,
      password: hashedPassword,
      profilePic: gender === "male" ? boyAvatar : girlAvatar,
    });
    if (newUser) {
      generateToken(newUser.id, res);
      await newUser.save();
      res.status(201).json({
        _id: newUser.id,
        username: newUser.username,
        fullName: newUser.fullName,
        email: newUser.email,
        profilePic: newUser.profilePic,
      });
    } else {
      return res.status(400).json({ error: "Something went wrong" });
    }
  } catch (e) {
    console.error(`Error in signup controller: ${e}`);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await UserModel.findOne({ username });
    const isMatch = await bcrypt.compare(password, user.password || "");
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    generateToken(user.id, res);
    res.status(200).json({
      _id: user.id,
      username: user.username,
      fullName: user.fullName,
      email: user.email,
      profilePic: user.profilePic,
    });
  } catch (e) {
    console.error(`Error in signup controller: ${e}`);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 1 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (e) {
    console.error(`Error in signup controller: ${e}`);
    return res.status(500).json({ error: "Internal Server Error" });
  }
};
