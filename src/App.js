import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./component/About";
import Contact from "./component/Contact";
    
const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>

    );
};
//it is a list of object
const appRouting = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>
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
])

// Create root and render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

root.render(<RouterProvider router={appRouting}/>)