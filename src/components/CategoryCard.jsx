/* eslint-disable react/prop-types */
function CategoryCard({ title, total_items, total_items_sold, img }) {
  return (
    <div className="inline-block !w-[360px] min-w-[360px] border-[0.5px] border-solid border-[#D9D9D9] text-[21px] font-medium text-black">
      <img src={img} className="h-[173px] w-full " alt="" />
      {/* <div className="h-[173px] w-full bg-[#f5f5f5]"></div> */}
      <div className="bg-white px-[22.5px] py-[18px]">
        <h1 className="mb-[15px]">{title}</h1>
        <div className="flex gap-x-[45px]">
          <div>
            <h2 className="mb-[6px] text-base font-normal">Total Items</h2>
            <h3>{total_items}</h3>
          </div>
          <div>
            <h2 className="mb-[6px] text-base font-normal">Total Items Sold</h2>
            <h3>{total_items_sold}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryCard;
