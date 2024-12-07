import React from "react";
import { IoIosStar } from "react-icons/io";
const Conversation = () => {
  return (
    <>
      <div className="flex gap-2 items-center p-2 py-1 rounded cursor-pointer hover:bg-sky-100">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <IoIosStar size={40} />
            {/* <img src="" alt="Profile Avatar" /> */}
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">John Doe</p>
            <span className="text-xl">Emo</span>
          </div>
        </div>
      </div>
      <div className="py-0 my-0 h-1 divider" />
    </>
  );
};

export default Conversation;
