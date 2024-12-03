import UserModel from "../models/user.model.js";
export const getUserForSideBar = async (req, res) => {
  //
  try {
    const loggedInUserId = req.user._id;
    const allUsers = await UserModel.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");
    res.status(200).json(allUsers);
  } catch (e) {
    console.error("Error in getting Users.", e.message);
    res.status(400).json({ error: "Internal server error" });
  }
};
