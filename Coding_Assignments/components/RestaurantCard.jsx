import React from "react";

import { IMG_CDN_URL } from "../data/restaurant";

const RestrauntCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString,
    avgRating
  }) => {
    return(
        <> 
            <div className="item">
                    {/* <img src="https://source.unsplash.com/featured/400x300/?food" alt="" /> */}
                    <img src={IMG_CDN_URL + cloudinaryImageId} />
        


                    <div className="desc">
                        <span>{name ?? "Guess the Food"}</span>
                        <h3>{cuisines.join(', ')}</h3>
                        <h4>★ {avgRating ?? "No rating"}</h4>
                         <p>{lastMileTravelString ?? "In your Kitchen"} Minutes from your Address</p>
                        <button>Add to Cart</button>
                    </div>

            </div>
        </>
    )
}

export default RestrauntCard;