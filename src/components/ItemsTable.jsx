import React from "react";
import ItemsTableFilter from "./ItemsTableFilter";
import ItemsTableHeader from "./ItemsTableHeader";
import ItemTableRow from "./ItemTableRow";

function ItemsTable() {
  return (
    <div className="px-[80px] py-[42px]">
      <ItemsTableFilter />
      <div className="mt-6">
        <ItemsTableHeader />
        <div className="flex flex-col gap-y-10">
          <ItemTableRow
            num={"1"}
            name={"Dell XPS 13 Laptop"}
            price={"$200"}
            price_change={"+$5"}
            top_bid={"$320"}
            owner={"Jamie Oliver"}
            volume={"10"}
          />
          <ItemTableRow
            num={"2"}
            name={"Adidas Ultraboost Sneakers"}
            price={"$135"}
            price_change={"+$12"}
            top_bid={"$158"}
            owner={"Tommy Egan"}
            volume={"2"}
          />
        </div>
      </div>
    </div>
  );
}

export default ItemsTable;
