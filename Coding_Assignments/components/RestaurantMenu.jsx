import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {IMG_CDN_URL} from "../constant"
import Shimmer from "./Shimmer"



const RestaurantMenuHeader = () => {
    return (
        <>

            <div className="header-menu-container">
                <img className="menu-img"
                     src="https://images.pexels.com/photos/5745991/pexels-photo-5745991.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=200"
                     alt="" />
                    <div className="menu-info">
                        <h3>Cheese & Grill Restaurant</h3>
                        <span>ID: </span>
                        <span>Address: St. Marks Street</span>
                    </div>
                    <ul className="header-menu-list">
                        <li>
                            <span className="fa fa-check" aria-hidden="true"></span> 4.4 ⭐
                        </li>
                        <li>
                            <span className="fa fa-check" aria-hidden="true"></span> 500 for Two
                        </li>
                    </ul>
                    <button className="menu-button">Book a Table</button>
            </div>

        </>
    )
}



const RestaurantMenu = () => {
    const [restaurant, setRestaurant] = useState(null)
    const params = useParams();
    const {resId} = params;

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        const data = await fetch(
          "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" +
            resId
        );
        const json = await data.json();
        console.log(json.data);
        setRestaurant(json.data);
      }
    

      return !restaurant ? (
        <Shimmer />
      ) : (
          <div>
              <RestaurantMenuHeader />

        <div className="menu">
          <div>
            <h1>Restraunt id: {resId}</h1>
            <h2>{restaurant?.name}</h2>
            <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
            <h3>{restaurant?.area}</h3>
            <h3>{restaurant?.city}</h3>
            <h3>{restaurant?.avgRating} stars</h3>
            <h3>{restaurant?.costForTwoMsg}</h3>
          </div>
          <div>
            <h1>Menu</h1>
            <ul>
              {Object.values(restaurant?.menu?.items).map((item) => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
          </div>
      );
}


export default RestaurantMenu