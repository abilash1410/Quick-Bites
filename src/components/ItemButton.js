import { useState } from "react";
import { addItem, removeItem } from "../Utils/cartSlice";
import { useSelector,useDispatch } from "react-redux";

const ItemButton = (data) => {
  const card = data.data;
  const [countItem, setCountItem] = useState(0);
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const addItemToCart = (item, btnType) => {
    if (btnType === "addItem") {
      dispatch(addItem(item));
      setCountItem((prevState) => prevState + 1);
    } else {
      dispatch(removeItem(item));
      setCountItem((prevState) => prevState - 1);
    }
  };
  return (
    <div>
        {
            countItem === 0? <div>
                {countItem === 0  &&
                <button onClick={() =>addItemToCart(card,"addItem")} className="w-16 h-7 m-2 p-1 bg-fuchsia-400 text-black font-bold rounded-lg">
                    ADD 
                </button>}
            </div>:<div className="flex justify-between items-center">
            {countItem > 0 && (
              <div>
                <button
                  className="bg-fuchsia-400 w-3 h-5 text-black mx-2 font-bold text-center"
                  onClick={(e) => addItemToCart(card, "removeItem")}
                >
                  {" "}
                  -{" "}
                </button>
              </div>
            )}
            <span className="font-bold text-xs">{countItem}</span>
            <div>
              {" "}
              <button
                className="bg-fuchsia-400 w-3 h-5 text-black mx-2 font-bold text-center"
                onClick={(e) => addItemToCart(card, "addItem")}
              >
                {" "}
                +{" "}
              </button>
            </div>
          </div>
        }
      
       
        
      
    </div>
      );
};

export default ItemButton;
