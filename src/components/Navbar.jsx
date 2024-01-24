import Logo from "./Logo";
import NavSearchBar from "./NavSearchBar";
import NavigationLinks from "./NavigationLinks";
import WalletConnector from "./WalletConnector";

function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-white px-[80px] py-[14px]">
      <div className="flex items-center gap-x-[30px]">
        <Logo />
        <NavSearchBar />
      </div>
      <div className="flex items-center gap-x-[70px]">
        <NavigationLinks />
        <WalletConnector />
      </div>
    </nav>
  );
}

export default Navbar;
