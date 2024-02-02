import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useSearchWordStore from "../../store/searchWord";

const SearchBar = () => {
  const { query, setQuery, setResult, setError } = useSearchWordStore(
    (state) => ({
      query: state.query,
      setQuery: state.setQuery,
      setResult: state.setResult,
      error: state.error,
      setError: state.setError,
    })
  );

  const [queryIsValid, setQueryIsValid] = useState(true);

  useQuery({
    queryKey: ["search", query],
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
        );

        if (!response.ok) {
          if (response.status === 404) {
            setError(true);
            throw new Error("Oops, something went wrong!");
          }
          // Handle other non-404 errors here if needed
          throw new Error("Unexpected response from server");
        }
        const data = await response.json();
        setError(false);
        setResult(data[0]);
        return data;
      } catch (error) {
        console.error(error); // Log the error to the console
        throw error; // Re-throw the error for React Query to handle
      }
    },
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
