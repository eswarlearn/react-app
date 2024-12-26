import { useEffect, useState } from "react";
import Shimmer from "./Shrimmer";
const [resInfo,setResInfo] = useState("");

const RestaurantMenu =() => {
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.89960&lng=80.22090&restaurantId=748065&catalog_qa=undefined&submitAction=ENTER");

        const json= await data.json();
        console.log(json);
        setResInfo(json.data);
    }
    return (resInfo === "") ? (
        <Shimmer/>
    ):(
        <div className="menu">
            <h1>Name of Restaurant</h1>
            <h2>Menu</h2>
            <ul>
                <li>Briyani</li>
                <li>Burgers</li>
                <li>Diet Coke</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;