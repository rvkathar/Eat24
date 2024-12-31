import { CDN_URL } from "../utility/constants";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="m-4 p-3 w-[250px] h-[350px] rounded-lg shadow-md hover:scale-105 justify-evenly">
      <img
        className="rounded-lg w-[100%] h-[160px]"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-1 text-lg">{name}</h3>
      <h4 className="m-auto text-ellipsis">{cuisines.join(" , ")}</h4>
      <span className="flex font-medium py-1">
        <h4 className="px-1">{avgRating}</h4>
        <h4 className="px-1">•</h4>
        <h4 className="px-1">{sla.lastMileTravelString}</h4>
        <h4 className="px-1">•</h4>

        <h4 className="px-1">{costForTwo}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
