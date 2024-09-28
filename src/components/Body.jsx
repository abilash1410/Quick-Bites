import RestaurantCard from './RestaurantCard'
import restaurantList from '../Utils/mockdata'
import { useState } from 'react'

const Body = () => {

    const [restaurantCard,setRestaurantList] = useState(restaurantList.restaurants);
    const filterData = restaurantCard.filter(res => res.info.avgRating > 4.5);
    const topRatedRestaurantOnclick = () =>{
        setRestaurantList(filterData);
    }
    const clearFilters = () =>{
        setRestaurantList(restaurantList.restaurants);
    }
    const searchRestaurants = () => {
        var searchedItem = document.getElementById("searchres").value;
        const searchData = restaurantCard.filter(res => res.info.name =  searchedItem);
        setRestaurantList(searchData)
    }
    return (<div className="body">
        <div className="search">
            <button onClick={topRatedRestaurantOnclick}> 
                Top Rated Restaurants
            </button>
            <div>
            <button onClick={clearFilters}>
                Clear Filters
            </button>
            <input id = "searchres" type="search"  >

            </input>
            </div>
           
            <div className="res-container">
              {restaurantCard.map((restaurant,index) => 
              <RestaurantCard key = {restaurant.info.id}resObj= {restaurant.info}/>
              )}
            </div>
        </div>

    </div>)

    }


export default Body