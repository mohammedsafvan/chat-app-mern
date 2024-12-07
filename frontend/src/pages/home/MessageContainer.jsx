import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import { TiMessages } from "react-icons/ti";

const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className="flex flex-col md:min-w-[450px]">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="py-2 px-4 mb-2 bg-slate-500">
            <span className="label-text">To: </span>
            <span className="font-bold text-gray-900">John Doe</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col gap-2 items-center px-4 font-semibold text-center text-gray-200 sm:text-lg md:text-xl">
        <p>Welcome Safvan</p>
        <p>Select a chat to start messgaing</p>
        <TiMessages className="text-3xl text-center md:text-6xl" />
      </div>
    </div>
  );
};
