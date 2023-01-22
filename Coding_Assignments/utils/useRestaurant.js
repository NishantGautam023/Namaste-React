// useRestaurant will fetch the Data and give it to us.
import {useEffect, useState} from "react";

const useRestaurant = (resId)=> {
    const [restaurant,setRestaurant] = useState(null);

    // Get data from API
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

    // return restaurant Data
    return restaurant;

}



export default useRestaurant;