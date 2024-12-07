import React from "react";
import { IoSearchSharp } from "react-icons/io5";
const SearchInput = () => {
  return (
    <form className="flex gap-2 items-center">
      <input
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
