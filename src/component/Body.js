import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState, useEffect} from "react";
import Shimmer from "./Shrimmer";



const Body =() =>{
//Locat State Variable - Super powerul Variable
const [listOfRestaurants , setlistOfRestaurants] = useState([]);
//useState(resList); mockdata is removed
//useEffect is a  function with two arguments(below) , which is call after the body component is rendered
//1) callback function and 2)dependancy
useEffect(()=>{
// console.log("useEffort called");
fetchData();
},[])

const fetchData = async () =>{
    const data = await fetch (
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    //now use state variable
    //add optional chaining
    setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    

}
// Normal js varible
    // let listOfRestaurants =[
    //     {
    //         "info": {
    //           "id": "630193",
    //           "name": "Champaran  Handi Restaurant",
    //           "cloudinaryImageId": "xph0vf5pvbxjf8xchwjk",
    //           "costForTwo": "₹200 for two",
    //           "cuisines": [
    //             "North Indian"
    //           ],
    //           "avgRating": 4.3,
    //           "sla": {
    //             "deliveryTime": 52,
    //           },
    //         },
    //       },{
    //         "info": {
    //           "id": "151648",
    //           "name": "Mr. Gurung Momo & Chinese Corner",
    //           "cloudinaryImageId": "h7oibtpm7kqks8cqz3gh",
    //           "costForTwo": "₹150 for two",
    //           "cuisines": [
    //             "Momos",
    //             "Chinese",
    //              "Fast Food"
    //           ],
    //           "avgRating": 3.3,
    //           "sla": {
    //             "deliveryTime": 48,
    //           },
    //         },
    //       },
    // ]


    //conditional rendering
    // if(listOfRestaurants.length === 0){
    //     return <Shimmer/>;
    // }

    return listOfRestaurants.length === 0 ? <Shimmer/> : (
        <div className="body">
            <div className="Search">
                <input type="text"/>
                <input type="button" value="search"/>
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4
                    )
                    // console.log(filteredList);
                    setlistOfRestaurants(filteredList);                    
                    
                }} >Top Rated</button>
            </div>

            <div className="restro-container">
              {/* Use map to iterate over resList 
              not using key(not acceptable)<<<<< index as key <<< unique key*/}
              {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
                {/* <RestaurantCard resName="KFC" cusain="Hand Burker, Fries"/> */}
            </div>
        </div>
    );
}

export default Body;