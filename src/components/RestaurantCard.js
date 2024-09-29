import { CLOUDINARY_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
const RestaurantCard = (props) => {
   console.log("props-->"+JSON.stringify(props));
   const {resObj} = props;
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
    } = resObj
    const sla = resObj.sla.deliveryTime;
    console.log("sla-->"+JSON.stringify(resObj.sla));
    return (
        <div className="res">

            
            
            <div className = "img-res">
                <img  src={CLOUDINARY_URL+cloudinaryImageId} />
                {/* {console.log("jsondata ->"+JSON.stringify(restaurantList.restaurants[1].info))} */}
               <h3 className="cuisine-width">{name}</h3>
                <h5 className="cuisine-width">{cuisines.join(", ")}</h5>
                <h5 className="cuisine-width">{"Delivery-in "+sla+" Minutes"}</h5>
                <h5 className="cuisine-width">{"Rating- "+avgRating}</h5>
                <h5 className="cuisine-width">{costForTwo}</h5>
            </div>
           
            
        </div>
    );
}
export default RestaurantCard