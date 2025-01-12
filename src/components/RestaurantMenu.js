import { useEffect, useState } from "react";
import Shimmer from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utility/constants";
import StarIcon from "../components/StarIcon";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  if (resInfo === null) return <Shimmer />;

  const {
    name,
    cuisines,
    costForTwoMessage,
    avgRating,
    totalRatingsString,
    sla,
  } = resInfo?.cards[2]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  //console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className=" my-[20px] m-[231.66px]">
      <div className="ml-2 mb-2">
        <h1 className="font-bold text-3xl font-serif "> {name} </h1>
      </div>
      <div className=" border border-grey-300 shadow-2xl p-4 rounded-2xl w-full h-[144.53]">
        <div className="flex font-semibold">
          <p className="p-1">
            <StarIcon />
          </p>
          <p>{avgRating}</p>
          <p>({totalRatingsString})</p>
          <p className="pl-1 text-gray-500">•</p>
          <p className="pl-2">{costForTwoMessage}</p>
        </div>
        <div className="pr-2 p-3 text-[#fc8019] underline text-lg">
          {cuisines.join(",")}
        </div>
        <div className=" flex gap-1  lowercase font-semibold">
          <p className="pl-1 text-gray-500">•</p>
          {sla.slaString}
        </div>
      </div>

      <div className="">
        {/* {categories accordian} */}
        {categories.map((category, index) => (
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
