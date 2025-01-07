import { useState, useEffect } from "react";
import { LOGO_URL } from "../utility/constants";
import { Link } from "react-router-dom";

//whenever the state variable is change react will
//re-render this header components and all updates values will be there

export const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  useEffect(() => {}, []);
  return (
    <div className="flex justify-between shadow-2xl mb-2">
      <div className="logo-container">
        <img className="w-24 pl-6 m-2" src={LOGO_URL} />
      </div>
      <div className="flex items-center text-[18px] ">
        <ul className="flex p-4 m-4 ">
          <li className="px-5 hover:text-[#fc8019]">
            <Link to="/">Home</Link>
          </li>
          <li className="px-5  hover:text-[#fc8019]">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-5  hover:text-[#fc8019]">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-5  hover:text-[#fc8019]">Cart</li>
          <Link to="/login">
            <button
              className="login-btn"
              onClick={() => {
                btnName === "Login"
                  ? setbtnName("Logout")
                  : setbtnName("Login");
              }}
            >
              {btnName}
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
