/* eslint-disable react/prop-types */
function ItemTableRow({
  num,
  img,
  name,
  price,
  top_bid,
  price_change,
  volume,
  owner,
}) {
  return (
    <div className="itemsTableRow grid grid-cols-[50px_3fr_1fr_1fr_1fr_1fr_1.5fr] items-center text-xl font-semibold text-black">
      <div className="font-normal">{num}</div>
      <div className="flex items-center gap-x-[14px]">
        {/* <img src={img} alt="" /> */}
        <div className="h-[80px] w-[80px] bg-[#f5f5f5]"></div>
        <h1>{name}</h1>
      </div>
      <div>{price}</div>
      <div>{top_bid}</div>
      <div className="text-[#1BD465]">{price_change}</div>
      <div>{volume}</div>
      <div>{owner}</div>
    </div>
  );
}

export default ItemTableRow;
