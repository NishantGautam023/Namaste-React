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
                        <h3>{restaurant?.name}</h3>
                        <span>ID: {resId} </span>
                        <span className="label">{restaurant?.cuisines.join(", ")}</span>
                        <span>Address: {restaurant?.area}</span>
                    </div>
                    <ul className="header-menu-list">
                        <li>
                            <span className="ratings" aria-hidden="true"></span> {restaurant?.avgRating} ⭐
                        </li>
                        <li>
                            <span className="ratings" aria-hidden="true"></span>  ₹{(restaurant?.costForTwo)/100} for Two
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
                {Object.values(restaurant?.menu.items).map(item =>

                    <div className="menu-description-container">


                        <img className="menu-img"
                             src={IMG_CDN_URL + item?.cloudinaryImageId}
                             alt={item?.name}/>

                        <div className="menu-desc">
                            <h3>{item?.name}</h3>
                            <p>{item?.description}</p>
                            <div className="desc-id">#3333</div>
                        </div>
                        <div>
                            <label>Quantity :</label>
                            <input className="menu-input" type="text"  size="1"/>
                        </div>
                        <div className="price">
                            {(item?.price > 0) ?
                            new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR'}).format(item?.price/100 ): " " }

                        </div>







                    </div>

                )}

            </>
        )
    }


      return !restaurant ? (
        <Shimmer />
      ) : (



            <div>
                <RestaurantMenuHeader />
                <span className="total-items">We have   {Object.keys(restaurant?.menu?.items).length} ITEMS</span>

                    <RestaurantMenuCart />





            </div>


      );
}


export default RestaurantMenu