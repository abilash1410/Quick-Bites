import React from 'react'
import { useEffect, useState } from 'react'
import { RESTAURANT_MENU } from '../Utils/constants'
import { useParams } from 'react-router-dom'
import Shimmer from './Shimmer'


const RestaurantMenu = () => {

    const emptyMenu = [];
    const [restaurantMenu, setrestaurantMenu] = useState(emptyMenu)
    let {resId} = useParams();
    console.log("resId ->"+resId);

    // if (restaurantMenu.length === 0) {
    //      return (<Shimmer/>)
    // }
    
    useEffect(() => {
        fetchRestaurantmenu();
    }, [])

   


    const fetchRestaurantmenu = async () => {
        const differentMenu = await fetch(RESTAURANT_MENU + resId);
        const uniqueMenuItems = await differentMenu.json();
        const itemCards = uniqueMenuItems?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards
        setrestaurantMenu(itemCards);
        console.log("menuJSON-->" + (restaurantMenu));
    }
    return restaurantMenu.length === 0 ?(<Shimmer/>) :(
        <div>
            {restaurantMenu.map((menu, index) =>
                <h2>{menu.card.info.name + " - Rs."}</h2>
            )}
        </div>
    )
}

export default RestaurantMenu
