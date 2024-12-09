import SideBar from "./SideBar";
import MessageContainer from "./MessageContainer";

const Home = () => {
  return (
    <div className="flex overflow-hidden bg-clip-padding bg-gray-400 bg-opacity-0 rounded-2xl backdrop-filter backdrop-blur-lg sm:h-[450px] md:h-[550px]">
      <SideBar />
      <MessageContainer />
    </div>
  );
};

export default Home;
