import { restaurantList } from "../data/restaurant";
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";







function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );

  return filterData;
}
  

  const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    
    useEffect(() => {
      getRestaurants();
    }, []);


    
  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  // not render component (Early return)
  if (!allRestaurants) return null;
    

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
            <>  
            
                <div className="container">
                    <div className="search">
                    
                    <input
                        type="text"
                        className="search-input"
                        placeholder="Search"
                        value={searchText}
                        onChange={(e) => {
                          setSearchText(e.target.value);
          }}
        />

                         <button className="btn" onClick={() => {
                                   //need to filter the data
                      const data = filterData(searchText, allRestaurants);
                    // update the state - restaurants
                    setFilteredRestaurants(data);
                                
                         }} >Search</button>      
                
                    </div>
           
                    <div className="main">
                    <div className="container-icon">
                                   
                    {filteredRestaurants.map((restaurant) => {
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
