import CategoryCard from "./CategoryCard";
import electronics from "../assets/electronics.png";
import collectibles from "../assets/collectibles.png";
import auto from "../assets/automative.png";
import sports from "../assets/sport.png";

function TopCategories() {
  return (
    <div className="border-y-solid border-y-[1px] border-y-[#D2D2D2] pb-10 pl-[80px] pt-[46px] text-black">
      <div className="mb-[43px] flex items-center justify-between pr-[80px]">
        <h2 className="text-[28px] font-normal">Top Categories</h2>
        <button className="text-xl font-normal">View all</button>
      </div>
      <div className="categoriesSlider flex gap-x-[15px]">
        <CategoryCard
          title={"Electronics"}
          img={electronics}
          total_items={"21,400"}
          total_items_sold={"2,400"}
        />
        <CategoryCard
          title={"Collectibles"}
          img={collectibles}
          total_items={"21,400"}
          total_items_sold={"2,400"}
        />
        <CategoryCard
          title={"Automotive"}
          img={auto}
          total_items={"21,400"}
          total_items_sold={"2,400"}
        />
        <CategoryCard
          title={"Sports and Outdoors"}
          img={sports}
          total_items={"21,400"}
          total_items_sold={"2,400"}
        />
        <CategoryCard
          title={"Electronics"}
          img={auto}
          total_items={"21,400"}
          total_items_sold={"2,400"}
        />
        <CategoryCard
          title={"Electronics"}
          img={sports}
          total_items={"21,400"}
          total_items_sold={"2,400"}
        />
      </div>
    </div>
  );
}

export default TopCategories;
