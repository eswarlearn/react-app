import React from "react";
import ReactDOM from "react-dom/client";
/*
* Header
* - Logo
* -Nav Iteams
* Body
* - Search 
* - RestaurantContainer
*   -- RestaurantCard
*   -- Img
*   -- Name of rest , star rating, cusine, deteils
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


const resObj=
        {
          
            "info": {
              "id": "630193",
              "name": "Champaran  Handi Restaurant",
              "cloudinaryImageId": "xph0vf5pvbxjf8xchwjk",
              "locality": "Sinchai Colony",
              "areaName": "Nagpur road",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "North Indian"
              ],
              "avgRating": 4.3,
              "parentId": "376324",
              "avgRatingString": "4.3",
              "totalRatingsString": "302",
              "sla": {
                "deliveryTime": 52,
                "lastMileTravel": 11.9,
                "serviceability": "SERVICEABLE",
                "slaString": "50-55 mins",
                "lastMileTravelString": "11.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2024-10-06 23:00:00",
                "opened": true
              },
              "badges": {
                
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "imageBased": {
                    
                  },
                  "textBased": {
                    
                  },
                  "textExtendedBadges": {
                    
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹89"
              },
              "orderabilityCommunication": {
                "title": {
                  
                },
                "subTitle": {
                  
                },
                "message": {
                  
                },
                "customIcon": {
                  
                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {
                    
                  },
                  "video": {
                    
                  }
                }
              },
              "reviewsSummary": {
                
              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {
                
              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
              "context": "seo-data-2d0ffe2f-1066-4061-a878-3fec9c95c742"
            },
            "cta": {
              "link": "https://www.swiggy.com/city/chhindwara/champaran-handi-restaurant-sinchai-colony-nagpur-road-rest630193",
              "text": "RESTAURANT_MENU",
              "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
          
              
          };
    

//js object
// const styleCard = 
//jsx inline style
const RestaurantCard =(prop) =>{
    const {resData}=prop;
    console.log(resData.info.name);
    console.log(resData.info.cuisines);
    
    return (        
        <div className="res-card" style={{ backgroundColor : "#f0f0f0"   }}>
           <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+resData.info.cloudinaryImageId}/>
           <h3>{resData.info.name}</h3>
           <h3>Cost: {resData.info.costForTwo}</h3>
           <h4>{resData.info.cuisines.join(", ")}</h4>
           <h4>{resData.info.sla.deliveryTime} Minutes</h4>
           {/* <h4>{resData}</h4> */}
        </div>
    );
}

const Body =() =>{
    return (
        <div className="body">
            <div className="Search">
                <input type="text"/>
                <input type="button" value="search"/>
            </div>
            <div className="restro-container">
                <RestaurantCard resData= {resObj}/>
                {/* <RestaurantCard resName="KFC" cusain="Hand Burker, Fries"/> */}
            </div>
        </div>
    );
}

const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Body/>
        </div>

    );
}

// Create root and render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);