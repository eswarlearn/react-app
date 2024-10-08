import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
const Body =() =>{
    return (
        <div className="body">
            <div className="Search">
                <input type="text"/>
                <input type="button" value="search"/>
            </div>
            <div className="restro-container">
              {/* Use map to iterate over resList 
              not using key(not acceptable)<<<<< index as key <<< unique key*/}
              {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
                {/* <RestaurantCard resName="KFC" cusain="Hand Burker, Fries"/> */}
            </div>
        </div>
    );
}

export default Body;