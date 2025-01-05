/* eslint-disable react/prop-types */
import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const messageTime = extractTime(message.createdAt);
  const isFromMe = message.senderId === authUser._id;
  const chatClassName = isFromMe ? "chat-end" : "chat-start";
  const profilePic = isFromMe
    ? authUser?.profilePic
    : selectedConversation?.profilePic;
  const bubbleBg = isFromMe ? "chat-bubble-primary" : "";

  return (
    <>
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img alt="Tailwind CSS chat bubble component" src={profilePic} />
          </div>
        </div>
        <div className={`chat-bubble ${bubbleBg}`}>{message.message}</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
          {messageTime}
        </div>
      </div>
    </>
  );
};

export default Message;
