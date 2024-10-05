import React from "react";
import ReactDOM from "react-dom/client";
/*
* Header
* - Logo
* -Nav Iteams
* Body
* - Search 
* - RestaurantContainer
* Footer
* -Link
* -Contach
* -Adress 
* -CopyRights 
*/


const Header = () => {
    return(
        <div className="header">
            <div className="logo-container">
                <img
                className="logo"
                src="https://img.freepik.com/premium-vector/indian-restaurant-icon-elephant-spice-leaf_8071-48367.jpg?w=740" />
            </div>
            <div className="nav-iteam">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
        </div>

    );
}

// Create root and render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);