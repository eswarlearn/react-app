import { useEffect, useState } from "react";
import Shimmer from "./Shrimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState("");

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.89960&lng=80.22090&restaurantId=117767&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

//   const cards = resInfo?.cards || [];
  const {name,cloudinaryImageId,costForTwoMessage,cuisines,avgRating} = resInfo?.cards?.[2]?.card?.card?.info || "No items found";
  // console.log("menu=>"+name);
  // console.log("cuisines=>"+cuisines);

  const {itemCards}= resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card || "No items found";

  console.log(itemCards);
  

  // console.log("call==>" + resInfo);
  // const {text}= json.data?.cards[0]?.card?.card;
  // console.log("text....>"+text);

  return resInfo === "" ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <h1>{name}</h1>
      <h4>{cuisines.join(", ")} - {costForTwoMessage}</h4>
      <h4>ratings :- {avgRating}</h4>
      <ul>
        {/* {itemCards.map((item)=> 
        <li key={item?.card?.info?.id}>{item?.card?.info?.name} - Rs. {item?.card?.info?.price/100}</li>)} */}
        {/* <li>{itemCards?.[0]?.card?.info?.name}</li>
        <li>{itemCards?.[1]?.card?.info?.name}</li>
        <li>Burgers</li>
        <li>Diet Coke</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
