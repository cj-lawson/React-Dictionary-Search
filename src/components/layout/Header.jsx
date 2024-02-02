import logo from "/logo.svg";
import chevronDown from "/chevron-down.svg";

const Header = () => {
  return (
    <nav className="w-full">
      <div className="flex justify-between w-full">
        <img src={logo} alt="book outline" className="w-5" />
        <div className="flex space-x-2">
          <h1>Sans Serif</h1>
          <img src={chevronDown} alt="book outline" className="w-3" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
