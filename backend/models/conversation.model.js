import mongoose from "mongoose";

const ConversationSchema = new mongoose.Schema(
  {
    members: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    messages: [],
  },
  { timestamps: true },
);

const Conversation = mongoose.model("Conversation", ConversationSchema);

export default Conversation;
