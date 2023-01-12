import { restaurantList } from "../data/restaurant";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";







function filterRestaurant(searchText, restaurants) {
  return restaurants.filter((eachRestaurant) =>
    eachRestaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
  );
}
  

  const Body = () => {
    const [restaurants, setRestaurants] = useState(restaurantList);
    const [searchText, setSearchText] = useState("");
        
    

        return(
            <>  
            
                <div className="container">
                    <div className="search">
                    
                        <input type="text" placeholder="What are you looking for 🔎🧐🕵"  
                           onKeyUp={(e) => {
                            const text = e.target.value;
                            if (text !== "") {
                              setRestaurants(filterRestaurant(e.target.value, restaurants));
                            } else {
                              setRestaurants(restaurantList);
                            }
                            setSearchText(text);
                          } }
                        />

                         <button className="btn" onClick={() => {
                                 
                                
                         }} >Search</button>      
                
                    </div>
           
                    <div className="main">
                    <div className="container-icon">
                                   
                    {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
       
                               </div>

                    </div>

                </div>    
            </>
        )
}

export default Body;