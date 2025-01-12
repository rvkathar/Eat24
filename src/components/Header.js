import { useState, useEffect } from "react";
import { LOGO_URL } from "../utility/constants";
import { Link } from "react-router-dom";
import { LiaHomeSolid } from "react-icons/lia";
import { LuBadgeInfo } from "react-icons/lu";
import { RiContactsLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  useEffect(() => {}, []);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between shadow-2xl mb-2">
      <div className="logo-container">
        <img className="w-24 pl-6 m-2" src={LOGO_URL} />
      </div>
      <div className=" items-center text-[18px] ">
        <ul className="flex p-4 m-4 ">
          <li className="  px-5 hover:text-[#fc8019]">
            <Link to="/" className="flex m-0">
              <LiaHomeSolid className="m-1" />
              Home
            </Link>
          </li>
          <li className="px-5  hover:text-[#fc8019]">
            <Link to="/about" className="flex">
              <LuBadgeInfo className="m-1" />
              About Us
            </Link>
          </li>
          <li className="px-5  hover:text-[#fc8019]">
            <Link to="/contact" className="flex">
              <RiContactsLine className="m-1" />
              Contact Us
            </Link>
          </li>
          <li className="px-5  hover:text-[#fc8019]">
            <Link to="/cart" className="flex">
              <div className="border rounded-md w-6 h-6 flex items-center justify-center text-sm font-medium">
                {cartItems.length}
              </div>
              Cart
            </Link>
          </li>
          <Link to="/login" className="">
            <button
              className="login-btn hover:text-[#fc8019] flex"
              onClick={() => {
                btnName === "Login"
                  ? setbtnName("Logout")
                  : setbtnName("Login");
              }}
            >
              <AiOutlineUser className="m-1" />
              {btnName}
            </button>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
