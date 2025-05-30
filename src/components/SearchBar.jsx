import { FaSearch } from "react-icons/fa";

const SearchBar = ({ setSearch }) => {
  return (
    <div className="max-w-xl mx-auto my-6">
      <div className="flex">
        <div className="relative w-full">
          <input
            type="search"
            onBlur={(e) => setSearch(e.target.value)}
            className="block p-2.5 w-full text-sm text-gray-900 focus:outline-none bg-teal-50 rounded-xl border border-teal-300"
            placeholder="Search by Scholarship name or Category or University Name"
          />
          <button
            type="button"
            className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-teal-700 rounded-e-xl border border-teal-700 hover:bg-teal-800 focus:outline-none "
          >
            <FaSearch />
          </button>
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
