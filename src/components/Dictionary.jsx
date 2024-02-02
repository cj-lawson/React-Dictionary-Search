import Header from "./layout/Header";
import SearchBar from "./main/SearchBar";

const Dictionary = () => {
  return (
    <div className="flex flex-col space-y-6">
      <Header />
      <SearchBar />
    </div>
  );
};

export default Dictionary;
