import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: recieverId } = req.parms;
    const senderId = req.user._id;

    let conversation = Conversation.findOne({
      members: { $all: [senderId, recieverId] },
    });

    if (!conversation) {
      conversation = Conversation.create({
        members: [senderId, recieverId],
      });
    }
    const newMessage = new Message({
      senderId,
      recieverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // Socket functionality here
    Promise.all([conversation.save(), newMessage.save()]);
    res.status(201).json(newMessage);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.parms;
    const senderId = req.user._id;

    let conversation = Conversation.findOne({
      members: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
