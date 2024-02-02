import logo from "/logo.svg";
import github from "/github-mark-white.svg";

const Header = () => {
  return (
    <nav className="w-full">
      <div className="flex justify-between w-full">
        <img src={logo} alt="book outline" className="w-7" />
        <div className="flex space-x-2">
          <a href="https://github.com/cj-lawson/React-Dictionary-Search">
            <img src={github} alt="book outline" className="w-7" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
