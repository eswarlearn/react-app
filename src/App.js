import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
import Error from "./component/error";
import RestaurantMenu from "./component/RestaurantMenu.js"
    
const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>

    );
};
//it is a list of object
const appRouting = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children: [
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            ,
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            },
        ],
        errorElement:<Error/>
    },
   
])

// Create root and render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

root.render(<RouterProvider router={appRouting}/>)