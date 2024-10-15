import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({data,showItems,setShowIndex}) => {
    console.log(data);
 
    const handleCollapseExpand = () => {
        setShowIndex();
    };

    return (<div>
        <div  className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
            <div onClick={handleCollapseExpand} className="flex">
            <span className="font-bold text-lg"> {data.title} ({data.itemCards.length})</span>
            </div>
            <div className="">{showItems && <ItemList resMenuOptions={data.itemCards}/>}</div>
          </div>
    </div>)
}

export default RestaurantCategory