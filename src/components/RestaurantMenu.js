import {useParams} from "react-router-dom";
import { useEffect , useState } from "react";
import { data } from "../data";
import Shimmer from "./shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem , removeItem} from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () =>{
    const params = useParams();
    const {id} = params;
    const restaurant = useRestaurant(id);
    const dispatch = useDispatch();
    const handleAddItems = (item) =>{
      dispatch(addItem(item))
    }
    const handleDeleteItems = (item) =>{
        dispatch(removeItem(item))
    }

return (!restaurant) ? <Shimmer/> : (
    <div className="flex">
        <h1> Restaurant id :{id} </h1>
        <h2> restaurant name : {restaurant.name}</h2>
        <img src={restaurant.image}></img>
        <div>
          {/* <button className="p-2 m-2 bg-green-200" onClick={()=> handleAddItems()}>Add items</button> */}
        </div>
        <div>
            <h1 className="font-bold p-5 ">Menu:-</h1>
            <ul> 
                {restaurant?.menu.map((item) => (
                        <li key={item.id}>{item.items}
                        <button className="p-2 m-2 bg-green-200" onClick={()=> handleAddItems(item)}>+</button>
                        <button className="p-2 m-2 bg-green-200" onClick={()=> handleDeleteItems(item)}>-</button>
                        </li>
                    ))}
            </ul>
        </div>
    </div>
)
}
export default RestaurantMenu;