import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setSearch }) => {
  return (
    <div className="max-w-xl mx-auto my-6">
      <div className="flex">
        <div className="relative w-full">
          <input
            type="search"
            onBlur={(e) => setSearch(e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg outline-none border-2 border-gray-300"
            placeholder="Search..."
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-teal-700 rounded-e-lg border border-teal-700 hover:bg-teal-800 focus:outline-none "
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
