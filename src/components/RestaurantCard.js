import { CLOUDINARY_URL } from "../Utils/constants";
import { Link } from "react-router-dom";
const RestaurantCard = (props) => {
  console.log("props-->" + JSON.stringify(props));
  const { resObj } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = resObj;
  const sla = resObj.sla.deliveryTime;
  console.log("sla-->" + JSON.stringify(resObj.sla));
  return (
    <div className="rounded-lg m-2 w-[250px]  bg-fuchsia-100 flex hover:bg-fuchsia-300">
      <div className="mt-5">
        <img className="items-center ml-[25px] w-[200px] h-[150px] rounded-lg" src={CLOUDINARY_URL + cloudinaryImageId} />
     <div className="mb-5 ml-5 flex-wrap">
        <h5 className="font-bold py-5 text-lg">{name}</h5>
        <h6 className="py-1 text-sm">{"Delivery - " + sla + " min"}</h6>
        <h6 className="py-1 text-sm">{"Rating - " + avgRating}</h6>
        <h6>{costForTwo}</h6>
      </div>
    </div>
    </div>
  );
};


export const restaurantwithbadges = (RestaurantCard) => {
  return (props) => {
    const { resObj } = props;
    return (
      <div>
        <label className="absolute bg-black m-1 p-1 text-white rounded-lg">{resObj.areaName}</label>
        <RestaurantCard {...props} />
      </div>
    )
  }

}
export default RestaurantCard;
