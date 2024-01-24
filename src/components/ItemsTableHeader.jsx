function ItemsTableHeader() {
  return (
    <div className="itemsTableHeader grid grid-cols-[50px_3fr_1fr_1fr_1fr_1fr_1.5fr] text-xs font-normal text-[#d2d2d2]">
      <div>#</div>
      <div>Item Name</div>
      <div>Item Price</div>
      <div>Top Bid</div>
      <div>Price Change</div>
      <div>Volume</div>
      <div>Owner</div>
    </div>
  );
}

export default ItemsTableHeader;
