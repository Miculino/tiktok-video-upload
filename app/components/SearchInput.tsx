import SearchIcon from "../icons/SearchIcon";

export default function SearchInput() {
  return (
    <div className="w-full flex items-center gap-1 py-1 px-2 bg-gray-100 rounded-sm">
      <SearchIcon pathFill="#000" />
      <input
        className="w-full bg-transparent placeholder:text-gray-400 text-black text-sm placeholder:text-sm focus:outline-none"
        type="text"
        placeholder="Search"
      />
    </div>
  );
}
