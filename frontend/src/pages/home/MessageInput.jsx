import React from "react";
import { IoSendSharp } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
const MessageInput = () => {
  const noChatSelected = false;
  return (
    <form className="px-4 my-3">
      <div className="relative w-full">
        <input
          type="text"
          placeholder="Enter Message."
          className="block p-2.5 w-full text-sm text-white bg-gray-700 rounded-lg border border-gray-600"
        />
        <button
          type="submit"
          className="flex absolute inset-y-0 items-center end-0 pe-3"
        >
          <IoSendSharp className="w-6 h-6 outline-none" />
        </button>
      </div>{" "}
    </form>
  );
};

export default MessageInput;
