import React, {useState} from "react";
import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../data/restaurant";



// const searchbar = (
//     <div className="search">
//         <form action="#">
//             <input type="text" placeholder="What are you looking for 🔎🧐🕵" name="search"/>
//             <button className="btn">Search</button>      
//         </form>
//     </div>
// )

function filterData(searchText,restaurants) {
    const filterData = restaurants.filter(restaurant => {
        return restaurantList.data.name.includes(searchText)
    });
    return filterData;  
}



export default function Body() {
        const [searchText, setSearchText] = useState("")
        const [restaurants, setRestaurants] = useState(restaurantList)


        return(
            <>  
            
                <div className="container">
                    <div className="search">
                    
                        <input type="text" placeholder="What are you looking for 🔎🧐🕵" name="search" value={searchText}
                        onChange ={(event) => setSearchText(event.target.value) }
                        />

                         <button className="btn" onClick={() => {
                                 //need to filter the data
                                const data = filterData(searchText, restaurants);
                                 // update the state - restaurants
                                    setRestaurants(data);
                         }} >Search</button>      
                
                    </div>
           
                    <div className="main">
                    <div className="container-icon">
                                   
                                   {
                                       restaurants.map(restaurant => {
                                           return <RestaurantCard restaurant={restaurant.data} key={restaurant.data.id}  />
                                       })
                                   }
       
                               </div>

                    </div>

                </div>    
            </>
        )
}