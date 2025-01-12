import RestaurantCard from "./RestaurantCard";
import resList from "../utility/mockData";
import { useEffect, useState } from "react";
import { Website_URL } from "../utility/constants";
import Shimmer from "./ShimmerUI";
import { Link } from "react-router-dom";

const Body = () => {
  //Local State VAriable - Super powerful variable for that we use HOOKs

  let [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(Website_URL);

    const json = await data.json();
    //console.log(json);

    setListOfRestaurant(
      //optional chaining
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //conditional rendering: rendering on the base of condition is conditional rendering

  // by using ternary operator
  return listOfRestaurant?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="bg-[rgb(255,255,255) shadow-sm]">
      <div className="filter flex justify-center">
        <div className="search m-4 p-4 border-solid ">
          <input
            type="text"
            placeholder="Search for restaurant and food"
            className="border rounded-md px-5  "
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn px-4 py-1 m-4 rounded-md bg-[#fc8019]  text-white font-bold transform transition duration-50  hover:scale-95"
            onClick={() => {
              const filteredRestaurant = listOfRestaurant?.filter((res) => {
                return res?.info?.name
                  ?.toLowerCase()
                  ?.includes(searchText?.toLowerCase());
              });

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-1 bg-[#fc8019]  text-white font-bold rounded-md transform transition duration-50  hover:scale-95"
            onClick={() => {
              // Filter logic here
              const filterList = (listOfRestaurant = listOfRestaurant?.filter(
                (res) => res?.info?.avgRating > 4.2
              ));

              setFilteredRestaurant(filterList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-1 bg-[#fc8019]  text-white font-bold rounded-md transform transition duration-50  hover:scale-95"
            onClick={() => {
              const filterList = (listOfRestaurant = listOfRestaurant?.filter(
                (res) => res?.info?.sla?.lastMileTravel < 2.1
              ));
              setFilteredRestaurant(filterList);
            }}
          >
            Fast delivery
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-7 justify-center my-0 m-[162.33px]">
        {filteredRestaurant?.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
