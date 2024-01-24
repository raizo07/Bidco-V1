import searchIcon from "../assets/search-sm.svg";

function NavSearchBar() {
  return (
    <div className="relative w-[430px] text-base font-normal text-black">
      <img
        src={searchIcon}
        className="absolute left-[14px] top-[15px] h-[24px] w-[24px]"
        alt=""
      />
      <input
        type="text"
        id="search-items"
        name="search-items"
        placeholder="Search for Items, Categories or sellers"
        className="w-full bg-[#F5F5F5] py-[15px] pl-[54px] text-black outline-none placeholder:text-black"
      />
    </div>
  );
}

export default NavSearchBar;
