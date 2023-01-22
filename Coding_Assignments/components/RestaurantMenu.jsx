
import { useParams } from "react-router-dom";
import {IMG_CDN_URL} from "../constant"
import Shimmer from "./Shimmer"
import useRestaurant from "../utils/useRestaurant";




const RestaurantMenu = () => {

    const {resId} = useParams()
    const restaurant = useRestaurant(resId)









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
                            <button className="menu-button">Add </button>
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