import RestaurantCard from './RestaurantCard'
import restaurantList from '../Utils/mockdata'
import { useEffect, useState } from 'react'
import Shimmer from './Shimmer'

import { Link } from 'react-router-dom'

const Body = () => {

    
    let displayRestaurants = [];
    const [restaurantCard,setRestaurantList] = useState(displayRestaurants);
    const [filteredRestaurants,setfilteredRestaurants] = useState(displayRestaurants);
    const [searchedText,setsearchedText] = useState('');
    const filterData = restaurantCard.filter(res => res.info.avgRating > 4.5);


    
    const fetchSwiggyRestaurants = async () =>{
        const swiggyrestaurants = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.059564&lng=80.22899439999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await swiggyrestaurants.json();
        console.log("swiggyrestaurants -->"+json);
        displayRestaurants =  json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurantList(displayRestaurants);
        setfilteredRestaurants(displayRestaurants);
    }
  
    useEffect(() =>{
        console.log("useEffect is called");
        fetchSwiggyRestaurants();
    },[])

    
    const topRatedRestaurantOnclick = () =>{
        setfilteredRestaurants(filterData);
        setsearchedText('');
    }
    const clearFilters = () =>{
        setfilteredRestaurants(restaurantCard);
        setsearchedText('');
    }
    const searchRestaurants = () => {
        var searchedItem = document.getElementById("searchres").value;
        const searchData = restaurantCard.filter(res => res.info.name =  searchedItem);
        setRestaurantList(searchData)
    }
    
    return restaurantCard.length === 0 ? <Shimmer/> :(<div className="body">
        <div className="res-filters">
            <input type='text' value = {searchedText} onChange={(e)=>{
                setsearchedText(e.target.value);
            }}></input>
            <button className="filter-btn" onClick={(e) =>{
                    console.log("searchedText--"+searchedText);
                    const searchedData = restaurantCard.filter((res) => res.info.name.toLowerCase().includes(searchedText.toLowerCase()));
                    setfilteredRestaurants(searchedData);
            }}> Search</button>
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
              {filteredRestaurants.map((restaurant,index) => 
              <Link key = {restaurant.info.id}to={'/RestaurantMenu/'+restaurant.info.id}>
              <RestaurantCard resObj= {restaurant.info}/>
              </Link>
              )}
            </div>
        </div>

    </div>)

    }


export default Body