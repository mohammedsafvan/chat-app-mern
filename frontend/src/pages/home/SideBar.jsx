import SearchInput from "../../components/sidebar/SearchInput";
import LogoutButton from "../../components/sidebar/LogoutButton";
import Conversations from "../../components/sidebar/Conversations";

const SideBar = () => {
  return (
    <div className="flex flex-col p-4 border-r border-slate-500">
      <SearchInput />
      <div className="divider px4" />
      <Conversations />
      <LogoutButton />
    </div>
  );
};

export default SideBar;
