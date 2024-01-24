function NavFilter() {
  return (
    <ul className="border-b-solid relative z-[200] flex items-center gap-x-8 border-b-[1px]  border-b-[#f5f5f5] bg-primaryColor px-[80px] py-[19px] text-base font-normal text-white">
      <li>
        <a href="#">All</a>
      </li>
      <li>
        <a href="#">Electronics</a>
      </li>
      <li>
        <a href="#">Fashion</a>
      </li>
      <li>
        <a href="#">Collectibles</a>
      </li>
      <li>
        <a href="#">Sports and Outdoors</a>
      </li>
      <li>
        <a href="#">Jewelry and Watches</a>
      </li>
      <li>
        <a href="#">Toys and Hobbies</a>
      </li>
    </ul>
  );
}

export default NavFilter;
