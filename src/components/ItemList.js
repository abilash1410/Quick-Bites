import { useState } from "react";
import { CLOUDINARY_URL } from "../Utils/constants";
import ItemButton from "./ItemButton";
const ItemList = (prop) => {

  const menuItem = prop;
  return (
    <div>
      {menuItem.resMenuOptions.map((item, index) => (
        <div
          className="flex justify-between p-1 m-1 border-gray-200 border-b-2"
          key={item.card.info.id}>
            <div className="w-9/12 font-bold text-xs py-1">
              {" "}
              <span>{item.card.info.name}</span>
              <span>
                {item.card.info.price
                  ? " - ₹ " + item.card.info.price / 100
                  : " - ₹ " + item.card.info.defaultPrice / 100}
              </span>
              <p className="text-xs font-normal">{item.card.info.description}</p>
          </div>
            <div className="w-2/12 flex items-center justify-between">
              <div>
                <img
                  className="w-15"
                  src={CLOUDINARY_URL + item.card.info.imageId}
                ></img>
              </div>
                  <ItemButton data = {item}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
