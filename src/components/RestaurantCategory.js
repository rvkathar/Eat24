import { IoIosArrowDown } from "react-icons/io";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data }) => {
  return (
    <div>
      <div className=" w-full mx-auto my-4 shadow-lg shadow-b-5 p-4 ">
        <div className="flex justify-between">
          <span className="font-bold text-lg">
            {data.title}({data.itemCards.length})
          </span>
          <span>
            <IoIosArrowDown />
          </span>
        </div>
        {/* Accordian body */}
        <ItemList items={data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
