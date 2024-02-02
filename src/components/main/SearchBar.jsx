const SearchBar = () => {
  return (
    <div>
      <form>
        <div className="relative mt-2 flex items-center">
          <input
            type="text"
            name="query"
            placeholder="Search for a word"
            id="search"
            className="block w-full rounded-lg py-2.5 pr-14 text-white placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-[#303134] focus:outline-none focus:placeholder-transparent pl-3"
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
