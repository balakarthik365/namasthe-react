import React, { use } from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";
const Body = () => {
  const [list, setList] = useState([]);
  const [originalList, setOriginalList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [top, setTop] = useState(false);
  const [showApiError, setShowApiError] = useState("");
  //wheever state variable changes, react triggers a reconciliation cycle(re-renders the component)
  //useEffect is a normal JS function and it has two arguments. It handles the side-effects and API calls.
  //1. A callback function and
  //2. A dependency array
  //This is called after the component renders.
  useEffect(() => {
    // console.log("useEffect Triggered");
    fetchData();
  }, []);
  const fetchData = async () => {
    //fetch - is the browser feature to fetch API and used by JS. it will always returns a promise.
    try {
      const data = await fetch(SWIGGY_API);
      const json = await data.json();
      console.log(json);
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setList(restaurants);
      setOriginalList(restaurants);
    } catch (error) {
      console.log(error.statusMessage);
      setShowApiError(error.statusMessage);
    }
  };
  return originalList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-content">
      <div className="input-bars">
        <button
          type="button"
          className="search-top-btn"
          onClick={() => {
            setTop(!top);
            if (!top) {
              const filteredList = originalList.filter(
                (res) => res.info.avgRating > 4.5,
              );
              setList(filteredList);
            } else {
              setList(originalList);
            }
          }}
        >
          Top Listed Restaurants
        </button>
        <input
          type="text"
          placeholder="Restaurant Name or Cusine..."
          className="search-input"
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
              setList(typedFilter);
            } else {
              setList(originalList);
            }
          }}
        />
      </div>
      <div className="restaurant-container">
        {list.length === 0 && searchText !== "" ? (
          <h2>No restaurants/food found matching "{searchText}"</h2>
        ) : (
          list.map((restaurant) => (
            <RestaurantCard restData={restaurant} key={restaurant.info.id} />
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
