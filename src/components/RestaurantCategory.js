import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showList, setShowIndex }) => {
  console.log(data);
  const itemCards = data.itemCards;
  return (
    <div className="shadow-sm  m-2 p-1 border-2 border-gray-200 rounded-md cursor-pointer">
      <div
        className="text-md flex items-center justify-between font-bold p-2"
        onClick={() => {
          setShowIndex();
        }}
      >
        <div>{data.title}</div>
        <div className="transition-all ease-in ">{showList ? "⬆️" : "⬇️"}</div>
      </div>
      {showList && (
        <div className="text-left">
          {itemCards.map((item) => (
            <ItemsList key={item.card.info.id} item={item.card.info} />
          ))}
        </div>
      )}
    </div>
  );
};
export default RestaurantCategory;
