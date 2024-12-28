import {CON_URL}from "../utils/constant"
//js object
// const styleCard = 
//jsx inline style
const RestaurantCard =(prop) =>{
    const {resData}=prop;
    const {cloudinaryImageId,name,costForTwo,cuisines,avgRating,sla}=resData?.info;
    // console.log(name);
    // console.log(cuisines);
    
    return (        
        <div className="res-card" style={{ backgroundColor : "#f0f0f0"   }}>
           <img className="res-logo" alt="res-logo" src={CON_URL+cloudinaryImageId}/>
           <h3>{name}</h3>
           <h3>Cost: {costForTwo}</h3>
           <h4>{cuisines.join(", ")}</h4>
           <h4>{avgRating} Stars</h4>
           <h4>{sla.deliveryTime} Minutes</h4>
        </div>
    );
}


export default RestaurantCard;