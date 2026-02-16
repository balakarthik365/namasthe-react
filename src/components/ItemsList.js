import React from "react";
import { CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
const ItemsList = ({ item, showAddButton = true }) => {
  const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);
  const dispatch = useDispatch();
  const handleAddItem = (items) => {
    dispatch(addItem(items)); //sends the payload to the cartSlice and used as action.payload
  };
  const handleRemoveItem = (items) => {
    dispatch(removeItem(items)); //sends the payload to the cartSlice and used as action.payload
  };
  return (
    <div className=" border-2 rounded-md m-2 border-gray-200 flex items-center justify-between">
      <div className="px-4 w-8/12">
        <p className="text-md font-semibold">
          {item.name}({item.category}),
        </p>
        <p className="text-sm">{item.description}</p>
        <p className="text-md font-semibold my-2">
          ₹ {item.defaultPrice ? item.defaultPrice / 100 : item.price / 100}
        </p>
      </div>
      <div className="w-2/12 relative">
        <img
          className="object-cover box-border rounded-r-md"
          src={CDN_URL + item.imageId}
          alt=""
        />
        {showAddButton && (
          <div className="flex items-center justify-between absolute font-bold border-black border-2 rounded-sm bg-white text-black py-0.5 px-4 bottom-1 left-3 hover:shadow-xl hover:text-white hover:bg-black hover:border-white">
            <button
              className="border-2  rounded-4xl bg-black text-white h-6 w-6 flex items-center justify-center hover:bg-white hover:text-black cursor-pointer"
              onClick={() => handleRemoveItem(item)}
            >
              -
            </button>
            <p className="px-2">
              {cartItems.filter((cartItem) => cartItem.id === item.id).length}
            </p>
            <button
              className="border-2  rounded-4xl bg-black text-white h-6 w-6 flex items-center justify-center hover:bg-white hover:text-black cursor-pointer"
              onClick={() => handleAddItem(item)}
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemsList;
