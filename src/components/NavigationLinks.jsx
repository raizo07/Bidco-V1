import { NavLink } from "react-router-dom";

function NavigationLinks() {
  return (
    <ul className="flex items-center gap-x-[24px] text-base font-normal text-black">
      <li>
        <NavLink to={"buy"}>Buy Now</NavLink>
      </li>
      <li>
        <NavLink to={"sell"}>Sell</NavLink>
      </li>
      <li>
        <NavLink to={"explore"}>Explore</NavLink>
      </li>
      <li>
        <NavLink to={"help"}>Help</NavLink>
      </li>
    </ul>
  );
}

export default NavigationLinks;
