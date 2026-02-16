import { useParams } from "react-router-dom";
import { CDN_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState, useContext } from "react";
import UserContext from "../utils/UserContext";
const RestaurantMenu = () => {
  //creating the index value that need to be shared to child component
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resList = useRestaurantMenu(resId);

  const { loggedInUser } = useContext(UserContext);
  if (!resList) return <Shimmer />;
  const { name, avgRating, cloudinaryImageId, cuisines, costForTwo, locality } =
    resList?.cards[2]?.card?.card?.info;
  const categories =
    resList?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );

  return (
    <div className="mx-auto mt-4 text-center border-2 w-7/12 border-gray-200 rounded-md shadow-md">
      <div className="m-2">
        <h1 className="text-2xl border-b-2  my-2 font-bold text-blue-600">
          Welcome, {loggedInUser}
        </h1>
        <h1 className="text-xl font-bold my-2 text-blue-600">
          {name}, {locality}
        </h1>
      </div>
      <div className="m-1">
        {/* <img
          src={CDN_URL + cloudinaryImageId}
          className="w-100 rounded-md box-border h-3/6 object-cover"
          alt=""
        /> */}
        <h2 className="m-2 font-bold text-md">
          {avgRating} stars, {costForTwo}
        </h2>
        {/* <ul>
          {cuisines.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </ul> */}
      </div>
      <div className="m-2 border-t border-gray-400">
        <h3 className="text-sm font-semibold m-2">
          Available cusines: {cuisines.join(", ")}
        </h3>
      </div>
      {categories.map((category, index) => {
        // console.log(categories);
        return (
          //Lifting the state up
          <RestaurantCategory
            key={category?.card?.card?.title}
            data={category?.card?.card}
            showList={index === showIndex ? true : false} // control the child component to show.
            setShowIndex={
              () =>
                setShowIndex((prevIndex) =>
                  prevIndex === index ? null : index,
                ) // show component that clicked and collapse when same index
            }
            // {() => setShowIndex(index)} // show component that clicked
          />
        );
      })}
    </div>
  );
};
export default RestaurantMenu;
