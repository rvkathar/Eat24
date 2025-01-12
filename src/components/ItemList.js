import Veg from "../utility/Icons/Veg.png";
import NonVeg from "../utility/Icons/NonVeg.png";
import { CDN_URL } from "../utility/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../Redux/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-b-2 border-grey-200 flex "
        >
          <div className="w-9/12 ">
            <p className="w-[3%]">
              {item?.card?.info?.itemAttribute?.vegClassifier === "VEG" ? (
                <img src={Veg} />
              ) : (
                <img src={NonVeg} />
              )}
            </p>

            <span className="font-bold">{item?.card?.info?.name}</span>
            <p className="font-semibold">
              ₹
              {item?.card?.info?.defaultPrice
                ? item?.card?.info?.defaultPrice / 100
                : item?.card?.info?.price / 100}
            </p>
            <p className="text-sm my-1 ">{item?.card?.info?.description}</p>
          </div>

          <div className="w-3/12 h-30 p-4 ">
            <div className="absolute ">
              <button
                className=" w-[80px] mx-8 my-[100px] p-2 bg-white text-[#daa672] font-extrabold rounded-lg shadow-md hover:bg-gray-300"
                onClick={() => handleAddItem(item)}
              >
                ADD
              </button>
            </div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="rounded-2xl shadow-sm"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
