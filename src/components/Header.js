import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const checkOnline = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);
  const cartItems = useSelector((state) => state.cart.items);
  console.log(cartItems);
  return (
    <div className="flex items-center justify-between border-2 border-blue-600 rounded-b-md shadow-xl sticky top-0 bg-white z-10">
      <div className="px-1 py-2">
        <Link to="/">
          <img className="w-18" src={LOGO_URL} />
        </Link>
      </div>
      <div className="">
        <ul className="flex items-center justify-center gap-3 p-2">
          <li className="p-2 bg-blue-600 text-white text-md rounded-lg font-semibold hover:cursor-pointer hover:bg-blue-800 hover:shadow-md">
            Online Status: {checkOnline ? "✅" : "🔴"}{" "}
          </li>
          <li className="p-2 bg-blue-600 text-white text-md rounded-lg font-semibold hover:cursor-pointer hover:bg-blue-800 hover:shadow-md">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 bg-blue-600 text-white text-md rounded-lg font-semibold hover:cursor-pointer hover:bg-blue-800 hover:shadow-md">
            <Link to="/about-us">About Us</Link>
          </li>
          <li className="p-2 bg-blue-600 text-white text-md rounded-lg font-semibold hover:cursor-pointer hover:bg-blue-800 hover:shadow-md">
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li className="p-2 bg-blue-600 text-white text-md rounded-lg font-semibold hover:cursor-pointer hover:bg-blue-800 hover:shadow-md">
            <Link to="/groceries">Groceries</Link>
          </li>
          <li className="p-2 bg-blue-600 text-white text-md rounded-lg font-semibold">
            <Link to="/cart"> Cart 🛒 - ({cartItems.length} items)</Link>
          </li>
          <button
            type="button"
            className="p-2 text-blue-600   text-md font-semibold"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="p-2 text-blue-600 text-md rounded-lg font-semibold hover:cursor-pointer hover:bg-blue-800 hover:shadow-md">
             {loggedInUser} 
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
