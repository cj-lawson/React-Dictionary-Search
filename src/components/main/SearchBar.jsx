import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useSearchWordStore from "../../store/searchWord";

const SearchBar = () => {
  const { query, setQuery, setResult } = useSearchWordStore((state) => ({
    query: state.query,
    setQuery: state.setQuery,
    setResult: state.setResult,
  }));

  const [queryIsValid, setQueryIsValid] = useState(true);

  useQuery({
    queryKey: ["search", query],
    queryFn: () =>
      fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`)
        .then((response) => response.json())
        .then((data) => {
          setResult(data[0]);
          return data;
        }),
    enabled: Boolean(query),
    staleTime: 1200,
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const querySubmitted = formData.get("query").trim().toLowerCase();
    const isValid = Boolean(querySubmitted !== "");
    setQueryIsValid(isValid);
    if (isValid) setQuery(querySubmitted);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="relative mt-2 flex items-center">
          <input
            type="text"
            name="query"
            placeholder="Search for a word"
            id="search"
            className={`block w-full rounded-lg py-2.5 pr-14 text-white placeholder:text-gray-400 sm:text-sm sm:leading-6 bg-[#303134] focus:outline-none focus:placeholder-transparent pl-3 ${
              !queryIsValid ? "border border-red focus:border-none" : ""
            }`}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
