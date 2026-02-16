import { useState, useEffect } from "react";
import { SWIGGY_API } from "../utils/constants";
const useRestaurant = () => {
  const [originalList, setOriginalList] = useState([]);
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
      // console.log(json);
      const restaurants =
        // json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
        json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      // console.log(restaurants);
      setOriginalList(restaurants);
    } catch (error) {
      console.log(error.statusMessage);
      setShowApiError(error.statusMessage);
    }
  };
  return { originalList, showApiError };
};
export default useRestaurant;
