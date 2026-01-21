import React from "react";
import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { restData } = props;
  const { name, avgRating, cloudinaryImageId, cuisines } = restData?.info;
  const { slaString } = restData?.info?.sla; 
  return (
    <div className="restaurant-card">
      <div className="restaurant-header">
        <img className="restaurant-img" src={CDN_URL + cloudinaryImageId} />
      </div>
      <div className="restaurant-body">
        <h2 title={name}>{name}</h2>
        <p>
          Rating: {avgRating}, {slaString}
        </p>
      </div>
      <div className="restaurant-footer">
        <p>{cuisines.join(", ")}</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
