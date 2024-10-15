import { LOGO_URL } from "../Utils/constants"
import { useEffect, useState, useContext} from "react";
import { Link } from "react-router-dom";
import onlineStatus from "../Utils/useOnlineStatus"
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "./UserContext";
import { useSelector } from "react-redux";
const Header = () => {
    const defLoginValue = "Login";
    const changedVal = "Logout";
    const [btnLogin, setbtnLogin] = useState(defLoginValue);
    const isOnline = useOnlineStatus();
    const {loggedUser} = useContext(UserContext);
    const cartItems = useSelector((store) => store.cart.items)

    useEffect(() => {
        console.log("useEffect is called from header");
    }, [])
    const btnLoginLogout = () => {
        btnLogin === defLoginValue ? setbtnLogin(changedVal) : setbtnLogin(defLoginValue);
    }
    return (<div className="flex justify-between bg-fuchsia-300 border ">
        <div className="logo-container">
            <img className="w-20" src={LOGO_URL} />
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4">Online status : {isOnline? "you are online":"you are offline"}</li>
                <li className="px-4"><Link to='/'>Home</Link></li>
                <li className="px-4"><Link to='/AboutUs'>About us</Link></li>               
                <li className="px-4"><Link to='/Contactus'>Contact us</Link></li>
                <li className="px-4"> <Link to='/Cart'>Cart ({cartItems.length +" items"})</Link></li> 
                <button className="login-btn" onClick={btnLoginLogout}>{btnLogin}</button>
                <li className="px-4"> {loggedUser} </li>
            </ul>
        </div>
    </div>)
}

export default Header