import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
export const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  return (
    <div className="header-component">
      <div className="header-logo">
        <img className="header-img" src={LOGO_URL} />
      </div>
      <div className="header-nav">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            type="button"
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
