import React from "react";
import SearchInput from "../../components/sidebar/SearchInput";
import Conversation from "../../components/sidebar/Conversation";
import LogoutButton from "../../components/sidebar/LogoutButton";
const SideBar = () => {
  return (
    <div className="flex flex-col p-4 border-r border-slate-500">
      <SearchInput />
      <div className="divider px4" />
      <Conversation />
      <Conversation />
      <LogoutButton />
    </div>
  );
};

export default SideBar;
