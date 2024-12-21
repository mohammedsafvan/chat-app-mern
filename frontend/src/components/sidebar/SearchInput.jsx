import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import useGetConversation from "../../hooks/useGetConversation";
import toast from "react-hot-toast";
import useConversation from "../../zustand/useConversation";
const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversation();

  const handleSumit = (e) => {
    e.preventDefault();

    if (!search) return;
    if (search.length < 3) {
      return toast.error("Search term must be at least 3 chars");
    }
    const conv = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase()),
    );
    if (conv) {
      setSelectedConversation(conv);
      setSearch("");
    } else toast.error("No user Found!");
  };
  return (
    <form onSubmit={handleSumit} className="flex gap-2 items-center">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Seach..."
        className="rounded-full input input-bordered"
      />
      <button type="button" className="text-white btn btn-circle bg-sky-500">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
