import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart,removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatch = useDispatch();
  const clearCartHandler = () => {
    dispatch(clearCart());
  };
  const deleteItemHandler = (item) => {
    // console.log(item);
    dispatch(removeItem(item));
  };
  return (
    <div className="w-6/12 mx-auto border-2 border-gray-300 my-3 rounded-md">
      <div className="flex items-center justify-between">
        <div className="mx-auto py-3 text-2xl font-bold text-center">Cart</div>
        {cartItems.length > 0 && (
          <button
            className="p-2 mr-2 bg-blue-600 rounded-md hover:bg-blue-800 text-white font-bold cursor-pointer"
            onClick={clearCartHandler}
          >
            Clear cart
          </button>
        )}
      </div>
      {cartItems.length === 0 ? (
        <h1 className="text-xl my-2 font-bold text-orange-500 text-center">
          Cart is empty. Please add Items to the cart!!
        </h1>
      ) : (
        cartItems.map((cartItem, index) => (
          <div className="items-center flex justify-between" key={index}>
            <ItemsList item={cartItem} showAddButton={false} />
            <button
              className="p-2 mr-2 bg-red-600 rounded-md hover:bg-red-800 text-white font-bold cursor-pointer"
              onClick={() => deleteItemHandler(cartItem)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
};
export default Cart;
