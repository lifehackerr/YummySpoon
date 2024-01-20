import {useParams} from "react-router-dom";
import { useEffect , useState } from "react";
import { data } from "../data";
import Shimmer from "./shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestaurantMenu = () =>{
    const params = useParams();
    const {id} = params;
    const restaurant = useRestaurant(id);

return (!restaurant) ? <Shimmer/> : (
    <div>
        <h1> Restaurant id :{id}</h1>
        <h2> restaurant name : {restaurant.name}</h2>
        <img src={restaurant.image}></img>
        <div>
            <h1>Menu</h1>
            <ul> 
                {Object.values(restaurant?.menu[0]?.itemname).map((itemname) =>{
                    <li key={itemname.id}>{itemname.name}</li>
                })}
            </ul>
        </div>
    </div>
)
}
export default RestaurantMenu;