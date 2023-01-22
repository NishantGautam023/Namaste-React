// useRestaurant will fetch the Data and give it to us.
import {useEffect, useState} from "react";
import {FETCH_MENU_URL} from "../constant";

const useRestaurant = (resId)=> {
    const [restaurant,setRestaurant] = useState(null);

    // Get data from API
    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo() {
        const data = await fetch(
             FETCH_MENU_URL +
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