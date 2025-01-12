import { CDN_URL } from "../utility/constants";
import StarIcon from "./StarIcon";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData?.info;
  return (
    <div className="transform transition duration-100  hover:scale-95 ">
      <div className="  w-[202px] h-[135px] ">
        <img
          className="object-cover w-full h-full rounded-[15px] shadow-2xl "
          alt="res-logo"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>

      <h3 className="text-[18px] font-bold ml-[1px] py-1 text-lg max-w-[200px] truncate">
        {name}
      </h3>
      <p className="max-w-[200px] ml-[2px] truncate font-normal">
        {cuisines.join(",")}
      </p>
      <span className="flex font-semibold text-sm py-1 items-center ">
        <p>
          <StarIcon />
        </p>
        <h4 className="px-1">{avgRating}</h4>
        <h4 className="px-1">•</h4>
        <h4 className="px-1">{sla.slaString}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;
