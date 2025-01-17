import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="max-w-xl mx-auto my-6">
      <div className="flex">
        <select className="inline-flex items-center py-2 px-4 font-medium text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200  ">
          <option>Subject Category</option>
          <option>Doctor</option>
          <option>Engineer</option>
          <option>Agriculture</option>
        </select>
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-e-lg outline-none border-s-gray-50 border-s-2 border border-gray-300"
            placeholder="Search..."
            required
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
