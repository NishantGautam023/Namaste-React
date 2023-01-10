import React from "react";
import RestaurantCard from "./RestaurantCard";

const searchbar = (
    <div className="search">
        <form action="#">
            <input type="text" placeholder="What are you looking for 🔎🧐🕵" name="search"/>
            <button className="btn">Search</button>      
        </form>
    </div>
)





export default function Body() {
        return(
            <>  
            
                <div className="container">
                    {searchbar}
           
                    <div className="main">
                    <div className="container-icon">
                                   
                                   {
                                       restaurantList.map(restaurant => {
                                           return <RestaurantCard restaurant={restaurant.data} key={restaurant.data.id}  />
                                       })
                                   }
       
                               </div>

                    </div>

                </div>    
            </>
        )
}