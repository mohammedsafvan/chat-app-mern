import { IoSendSharp } from "react-icons/io5";
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";

const MessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) return;
    await sendMessage(message);
    setMessage("");
  };
  return (
    <form className="px-4 my-3" onSubmit={handleSubmit}>
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Enter Message."
          className="block p-2.5 w-full text-sm text-white bg-gray-700 rounded-lg border border-gray-600"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          type="submit"
          className="flex absolute inset-y-0 items-center end-0 pe-3"
        >
          {loading ? (
            <div className="loading loading-spinner "></div>
          ) : (
            <IoSendSharp className="w-6 h-6 outline-none" />
          )}
        </button>
      </div>{" "}
    </form>
  );
};

export default MessageInput;
