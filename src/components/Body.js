import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useRestaurant from "../utils/useRestaurant";
import UserContext from "../utils/UserContext";
const Body = () => {
  const { originalList, showApiError } = useRestaurant();
  const [searchText, setSearchText] = useState("");
  const [top, setTop] = useState(false);
  const [resList, setResList] = useState([]);
  const checkOnline = useOnlineStatus();
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  // console.log(resList);
  useEffect(() => {
    if (originalList?.length) {
      setResList(originalList);
    }
  }, [originalList]);
  if (checkOnline === false) {
    return <h1>Oh Oh!! Your offline please check the internet connection.</h1>;
  }
  // console.log(originalList.length);

  const { loggedInUser, setUserInfo } = useContext(UserContext);
  return originalList.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex items-center justify-between my-2">
        <button
          type="button"
          className="p-2 bg-blue-600 rounded-md hover:bg-blue-800 text-white font-bold "
          onClick={() => {
            setTop(!top);
            if (!top) {
              const filteredList = originalList.filter(
                (res) => res.info.avgRating >= 4.5,
              );
              setResList(filteredList);
            } else {
              setResList(originalList);
            }
          }}
        >
          Top Listed Restaurants
        </button>
        <input
          type="text"
          placeholder="Restaurant Name or Cusine..."
          className="border-2 border-gray-400 w-100 p-2 rounded-md focus-visible:outline-none focus-visible:border-blue-600 hover:border-blue-600"
          value={searchText}
          onChange={(e) => {
            const searchValue = e.target.value.toLowerCase();
            setSearchText(searchValue);
            if (searchValue !== "") {
              const typedFilter = originalList.filter(
                (res) =>
                  res.info.name.toLowerCase().includes(searchValue) ||
                  res.info.cuisines.some((cuisine) =>
                    cuisine.toLowerCase().includes(searchValue),
                  ),
              );
              setResList(typedFilter);
            } else {
              setResList(originalList);
            }
          }}
        />
        <input
          type="text"
          placeholder="Restaurant Name or Cusine..."
          className="border-2 border-gray-400 w-100 p-2 rounded-md focus-visible:outline-none focus-visible:border-blue-600 hover:border-blue-600"
          value={loggedInUser}
          onChange={(e) => setUserInfo(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-items-center gap-4 flex-wrap">
        {resList.length === 0 && searchText !== "" ? (
          <h2 className="text-orange-600 text-2xl font-bold">
            No restaurants/food found matching "{searchText}"
          </h2>
        ) : (
          resList.map((restaurant) => (
            <Link
              to={"restaurants/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.avgRating > 4.5 ? (
                <RestaurantCardPromoted restData={restaurant} />
              ) : (
                <RestaurantCard restData={restaurant} />
              )}
            </Link>
          ))
        )}
      </div>
    </>
  );
};

export default Body;
