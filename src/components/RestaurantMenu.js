import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import ItemList from "./ItemList";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex,setShowIndex] = useState(null);
  let { resId } = useParams();
  console.log("resId ->" + resId);
 

  const restaurantMenu = useRestaurantMenu(resId);
  const filterItemCategory = restaurantMenu.filter(
    (c) =>
      c.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  console.log("restaurantMenu -->" + JSON.stringify(filterItemCategory));

  

  return restaurantMenu.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="text-centre">
        {filterItemCategory.map((category, index) => (
          <RestaurantCategory data={category?.card?.card} 
                              showItems ={index === showIndex? true:false}
                              setShowIndex = {() => index === showIndex? setShowIndex(null) :setShowIndex(index)}

           />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
