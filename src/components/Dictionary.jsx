import Header from "./layout/Header";
import SearchBar from "./main/SearchBar";
import SearchResult from "./main/SearchResult";

const Dictionary = () => {
  return (
    <div className="flex flex-col space-y-6">
      <Header />
      <SearchBar />
      <SearchResult />
    </div>
  );
};

export default Dictionary;
