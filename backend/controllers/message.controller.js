import Conversation from '../models/conversation.model.js'
export const sendMessage = async (req, res) => {
  try {
    const { messageg } =  req.body;
    const { id: recieverId } = req.parms;
    const senderId = req.user._id;

    let conversation = Conversation.find({
      members: $all
    }) 
    
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};
