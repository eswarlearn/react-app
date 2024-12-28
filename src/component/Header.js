import {LOGO_URL} from "../utils/constant";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Header = () => {
    //whenevrt the state variale change whole component (header) rerender
    const [logBtn, setLogBtn]=useState("login");
    console.log("header render");
    
//without dependancy array useEffect is called on every render 
//if an empty dependancy array []=> useEffect call only on initial render and just once
//if dependancy array [logBtn]=>  every time that variable changes user effect is called
    useEffect(()=> {
        console.log("useffort called");
        
    },[logBtn])

    return(
        <div className="header">
            <div className="logo-container">
                <img
                className="logo"
                src={LOGO_URL} />
            </div>
            <div className="nav-iteam">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
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