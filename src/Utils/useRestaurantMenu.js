import { useState , useEffect } from "react";
import { RESTAURANT_MENU } from '../Utils/constants'

const useRestaurantMenu = (resid) =>{
    const resInfo = [];
    const [restaurantMenu,setrestaurantMenu] = useState(resInfo);
    useEffect (() =>{
        fetchRestaurantmenu();
    },[])
    const fetchRestaurantmenu = async () => {
        const differentMenu = await fetch(RESTAURANT_MENU + resid);
        const uniqueMenuItems = await differentMenu.json();  
       // const itemCards = uniqueMenuItems?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
        const itemCards =  uniqueMenuItems?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
        setrestaurantMenu(itemCards);
        console.log("itemCards-->" + (restaurantMenu));
    }

    return restaurantMenu;

}

export default useRestaurantMenu
