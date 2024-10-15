import RestaurantCard, {restaurantwithbadges} from "./RestaurantCard";
import restaurantList from "../Utils/mockdata";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";

import { Link } from "react-router-dom";
import UserContext from "./UserContext";

const Body = () => {
  let displayRestaurants = [];
  
  const [restaurantCard, setRestaurantList] = useState(displayRestaurants);
  const [filteredRestaurants, setfilteredRestaurants] =
    useState(displayRestaurants);
  const [searchedText, setsearchedText] = useState("");
  const filterData = restaurantCard.filter((res) => res.info.avgRating > 4.5);
  const RestaurantBadge = restaurantwithbadges (RestaurantCard);
  const {setName} = useContext(UserContext);

  const fetchSwiggyRestaurants = async () => {
    const swiggyrestaurants = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.059564&lng=80.22899439999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await swiggyrestaurants.json();
    console.log("swiggyrestaurants -->" + json);
    displayRestaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setRestaurantList(displayRestaurants);
    setfilteredRestaurants(displayRestaurants);
  };

  useEffect(() => {
    console.log("useEffect is called");
    fetchSwiggyRestaurants();
  }, []);

  const topRatedRestaurantOnclick = () => {
    setfilteredRestaurants(filterData);
    setsearchedText("");
  };
  const clearFilters = () => {
    setfilteredRestaurants(restaurantCard);
    setsearchedText("");
  };
  const searchRestaurants = () => {
    var searchedItem = document.getElementById("searchres").value;
    const searchData = restaurantCard.filter(
      (res) => (res.info.name = searchedItem)
    );
    setRestaurantList(searchData);
  };

  return restaurantCard.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div>
        <div className=" bg-fuchsia-300">
          <div className="flex">
            <input 
              className="bg-gray-50 hover:bg-gray-200 rounded-lg m-4 p-4"
              type="text" placeholder="Search a restaurant"
              value={searchedText}
              onChange={(e) => {
                setsearchedText(e.target.value);
              }}
            ></input>
            <button
              className=" rounded-lg px-4 py-2 m-4 bg-gray-50 hover:bg-gray-200"
              onClick={(e) => {  
                console.log("searchedText--" + searchedText);
                const searchedData = restaurantCard.filter((res) =>
                  res.info.name
                    .toLowerCase()
                    .includes(searchedText.toLowerCase())
                );
                setfilteredRestaurants(searchedData);
              }}
            >
              {" "}
              Search Restaurants
            </button>

            <button className= "  rounded-lg px-4 py-2 m-4 bg-gray-50 hover:bg-gray-200" onClick={topRatedRestaurantOnclick}>
              Top Rated Restaurants
            </button>

            <input placeholder="Type to change username"className="bg-gray-50 hover:bg-gray-200 rounded-lg m-4 p-4"type="text" onChange={(e)=>setName(e.target.value)}></input>

          
            <button className = " rounded-lg  px-4 py-2 m-4 bg-gray-50 hover:bg-gray-200" onClick={clearFilters}>Clear Filters</button>
         
          </div>

          
        </div>
      </div>
      <div>
       
        <div className="bg-fuchsia-200  flex flex-wrap">
          {filteredRestaurants.map((restaurant, index) => (
            <Link
              key={restaurant.info.id}
              to={"/RestaurantMenu/" + restaurant.info.id}>
              {
                restaurant.info.areaName === "Ashok Nagar" ? <RestaurantBadge resObj={restaurant.info}>
                </RestaurantBadge>:  <RestaurantCard resObj={restaurant.info} />
              }
             
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
