import { LOGO_URL } from "../Utils/constants"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const defLoginValue = "Login";
    const changedVal = "Logout";
    const [btnLogin, setbtnLogin] = useState(defLoginValue);
    useEffect(() => {
        console.log("useEffect is called from header");
    }, [])
    const btnLoginLogout = () => {
        btnLogin === defLoginValue ? setbtnLogin(changedVal) : setbtnLogin(defLoginValue);
    }
    return (<div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL} />
        </div>
        <div className="nav-items">
            <ul><li><Link to='/'>Home</Link></li>
                
                <li><Link to='/AboutUs'>About us</Link></li>
                
                <li><Link to='/Contactus'>Contact us</Link></li>
                
                <li> <Link to='/Cart'>Cart</Link></li>
               
                <button className="login-btn" onClick={btnLoginLogout}>{btnLogin}</button>
            </ul>
        </div>
    </div>)
}

export default Header