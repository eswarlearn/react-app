import {LOGO_URL} from "../utils/constant";
import {useState} from "react";

const Header = () => {
    //whenevrt the state variale change whole component (header) rerender
    const [logBtn, setLogBtn]=useState("login");

    return(
        <div className="header">
            <div className="logo-container">
                <img
                className="logo"
                src={LOGO_URL} />
            </div>
            <div className="nav-iteam">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login"
                    onClick={() => 
                    logBtn ==='login'? setLogBtn("logout"):setLogBtn("login") }>
                        {logBtn}
                        </button>
                </ul>
            </div>
        </div>
    );
}

export default Header;