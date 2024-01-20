import { useState ,useEffect} from "react"
import {data} from "../data"

const useRestaurant = (id) =>{
    const [restaurant, setRestaurant] = useState(null);
    useEffect(() =>{
        getRestaurantInfo();
    },[])

    async function getRestaurantInfo(){
        const newdata = data[id]
        console.log(newdata);  
        setRestaurant(newdata); 
    }
    return restaurant;

}
export default useRestaurant;