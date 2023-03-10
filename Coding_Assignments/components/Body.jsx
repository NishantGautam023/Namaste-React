import { restaurantList } from "../data/restaurant";
import RestaurantCard from "./RestaurantCard";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import {filterData} from "../utils/helper";
import useOnline from "../utils/useOnline";
import {off} from "process/browser";

const Body = () => {
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState("");
    
    useEffect(() => {
      getRestaurants();
    }, []);


    
  async function getRestaurants() {
      
      // Swiggy API to get Restaurant list with Render.com
      
    const data = await fetch(
        "https://dishdelish.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999"
    );
    const json = await data.json();
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();

  if(!isOnline) {
      return <h1>Offline, please check your Internet connection</h1>
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

            <Link
              to={"/restaurant/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
       
                               </div>

                    </div>

                </div>    
            </>
        )
}

export default Body;
