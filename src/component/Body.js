import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import {useState, useEffect} from "react";
import Shimmer from "./Shrimmer";
import { Link } from "react-router-dom";



const Body =() =>{
//Locat State Variable - Super powerul Variable
const [listOfRestaurants , setlistOfRestaurants] = useState([]);

//altering

const[filteredRestaurant,setFilteredRestaurant] = useState([]);
//whenever the state variable is updated whole body component is re-rendered or reconcilated
const [searchText, setSearchText]=useState("");
console.log('body render');

//useState(resList); mockdata is removed
//useEffect is a  function with two arguments(below) , which is call after the body component is rendered
//1) callback function and 2)dependancy
useEffect(()=>{
// console.log("useEffort called");
fetchData();
},[])

const fetchData = async () =>{
    const data = await fetch (
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    console.log(json);
    console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    //now use state variable
    //add optional chaining
    setlistOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //atering
    setFilteredRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

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
            <div className="filter">
            <div className="Search">
                <input type="text" 
                className="search-box" 
                value={searchText}
                onChange={(e) => {
                    setSearchText(e.target.value);
                }} />
                <button onClick={()=>{
                console.log(searchText);
                const filteredRestaurants = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()) );

                setFilteredRestaurant(filteredRestaurants);

                }}>Search</button>
            </div>
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
              {filteredRestaurant.map((restaurant) => (
                   <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}> <RestaurantCard  resData={restaurant} /></Link>
                ))}
                {/* <RestaurantCard resName="KFC" cusain="Hand Burker, Fries"/> */}
            </div>
        </div>
    );
}

export default Body;