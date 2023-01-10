import React from "react";



export default function RestaurantCard(props) {
    const { restaurant} = props;
    const imageUrl = `https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_308,h_220,c_fill/${restaurant.cloudinaryImageId}`
    return(
        <> 
            <div className="item">
                    {/* <img src="https://source.unsplash.com/featured/400x300/?food" alt="" /> */}
                    <img src={imageUrl} />
        


                    <div className="desc">
                        <span>{restaurant.name ?? "Guess the Food"}</span>
                        <h3>{restaurant.cuisines.join(', ')}</h3>
                        <h4>★ {restaurant.avgRating ?? "No rating"}</h4>
                         <p>{restaurant.deliveryTime ?? "In your Kitchen"} Minutes from your Address</p>
                        <button>Add to Cart</button>
                    </div>

            </div>
        </>
    )
}