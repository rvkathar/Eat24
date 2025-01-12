import { useDispatch, useSelector } from "react-redux";
import ItemList from "../components/ItemList";
import { clearCart } from "../Redux/cartSlice";
import { EMPTY_CART } from "../utility/constants";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className=" m-5 p-5">
      {/* <h1 className=" text-center text-2xl font-bold">Cart</h1> */}
      {cartItems && cartItems.length > 0 ? (
        <div>
          <div className="w-6/12 m-auto">
            <ItemList items={cartItems} />
          </div>
          <div className="text-right">
            <button
              className="hover:bg-[#fc8019] hover:text-white m-2 p-3 text-[#daa672] font-bold w-[150px] bg-gray-100 shadow-lg rounded-lg"
              onClick={handleClearCart}
            >
              CLEAR CART
            </button>
          </div>
        </div>
      ) : (
        <div>
          <div className=" flex items-center justify-center  ">
            <img src={EMPTY_CART} className="w-[300px]  " />
          </div>
          <div className="text-center text-lg  mx-[450px] my-3  w-3/12 shadow-2xl text-gray-500 font-bold rounded-md">
            Your cart is empty!!!!
          </div>
          <p className="text-center text-gray-500">
            You can go to home page to view more restaurants
          </p>
          <div className=" flex items-center justify-center m-2">
            <Link to="/">
              <button className="bg-[#fc8019] m-2 p-2 text-white font-bold hover:shadow-lg rounded-md">
                SEE RESTAURANTS NEAR YOU
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
