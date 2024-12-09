import { BiLogOut } from "react-icons/bi";
import useLogout from "../../hooks/useLogout.js";

const LogoutButton = () => {
  const { logout } = useLogout();
  const handleLogout = async (e) => {
    e.preventDefault();
    await logout();
  };
  return (
    <div className="mt-auto">
      <BiLogOut
        onClick={handleLogout}
        className="w-6 h-6 text-white cursor-pointer"
      />
    </div>
  );
};

export default LogoutButton;
