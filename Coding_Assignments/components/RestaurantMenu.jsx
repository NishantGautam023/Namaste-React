import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {IMG_CDN_URL} from "../constant"
import Shimmer from "./Shimmer"









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

    const RestaurantMenuHeader = () => {
        return (
            <>

                <div className="header-menu-container">
                    <img className="menu-img"
                         src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
                         alt="" />
                    <div className="menu-info">
                        <h3>Cheese & Grill Restaurant</h3>
                        <span>ID: {resId} </span>
                        <span>Address: {restaurant?.area}</span>
                    </div>
                    <ul className="header-menu-list">
                        <li>
                            <span className="ratings" aria-hidden="true"></span> {restaurant?.avgRating} ⭐
                        </li>
                        <li>
                            <span className="ratings" aria-hidden="true"></span>  ₹{restaurant?.costForTwo} for Two
                        </li>
                    </ul>
                    <button className="menu-button">Book a Table</button>
                </div>

            </>
        )
    }

    const RestaurantMenuCart = () => {
        return (
            <>
                <div className="menu-description-container">
                    <img className="menu-img"
                         src="https://images.pexels.com/photos/8148587/pexels-photo-8148587.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=100"
                         alt=""/>
                        <div className="menu-desc">
                            <h3>Stylish Tote Bag</h3>
                            <p>Brown Color Women's Tote Bag</p>
                            <div className="desc-id">#368798</div>
                        </div>
                        <div>
                            <label>Quantity :</label>
                            <input className="menu-input" type="text" value="1" size="1"/>
                        </div>
                        <div className="price">
                            $99.00
                        </div>

                </div>
            </>
        )
    }


      return !restaurant ? (
        <Shimmer />
      ) : (



            <div>
                <RestaurantMenuHeader />
                <RestaurantMenuCart />




            </div>


      );
}


export default RestaurantMenu