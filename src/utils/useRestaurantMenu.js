import { REST_DETAILS_API } from "./constants";
import { useState, useEffect } from "react";
const useRestaurantMenu = (resId) => {
  const [resList, setResList] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const URL = REST_DETAILS_API + resId;
    const data = await fetch(URL);
    const response = await data.json();
    setResList(response.data);
  };
  return resList;
};
export default useRestaurantMenu;
