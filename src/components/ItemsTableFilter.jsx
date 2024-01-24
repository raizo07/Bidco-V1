import TimeFilter from "./TimeFilter";

function ItemsTableFilter() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center rounded bg-[#F5F5F5] p-[2px]  text-base font-semibold">
        <button className="rounded-sm bg-primaryColor px-[15px] py-[13px] text-white">
          Top
        </button>
        <button className="rounded-sm bg-transparent px-[15px] py-[13px] text-black transition-all duration-200 ease-out hover:bg-primaryColor hover:text-white">
          Trending
        </button>
      </div>
      <div className="flex items-center gap-x-5">
        <TimeFilter />
      </div>
      <div className="rounded-sm bg-[#f5f5f5] px-6 py-[13px]">
        <select
          name="Categories"
          className="border-none text-base font-semibold outline-none"
          id=""
        >
          <option selected>Categories</option>
          <option value="electronics">Electronics</option>
          <option value="sports">Sports and outdoors</option>
          <option value="collectibles">Collectibles</option>
          <option value="automotive">Automotive</option>
        </select>
      </div>
      <button className="rounded-sm bg-[#f5f5f5] px-6 py-[13px] text-base font-semibold transition-all duration-200 ease-out hover:bg-primaryColor hover:text-white">
        View all
      </button>
    </div>
  );
}

export default ItemsTableFilter;
