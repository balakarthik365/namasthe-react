import React from "react";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { restData } = props; 
  const { name, avgRating, cloudinaryImageId, cuisines, costForTwo } =
    restData?.info;
  const { slaString } = restData?.info?.sla;
  return (
    <div className="border-2 w-72.5 border-gray-400 rounded-md">
      <div className="m-2">
        <img
          className="w-100 rounded-md box-border h-[350px] object-cover"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className="m-2">
        <div>
          <h2 className="text-md font-bold text-blue-600 h-12" title={name}>
            {name}
          </h2>
          <p className="font-bold text-sm my-1">
            Rating: {avgRating}, {slaString}, {costForTwo}
          </p>
        </div>
        <div className="mt-1 border-t border-gray-400 h-10">
          <p className="text-xs font-semibold">{cuisines.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <label className="absolute text-white bg-black right-4.5 top-4.5 border-2 rounded-md py-1 px-3">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
