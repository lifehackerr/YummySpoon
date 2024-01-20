import { useState } from "react";
import RestaurantCards from "./Restaurantcards";
import { useState , useEffect } from "react";
import { data } from "../data";
import Shimmer from "./shimmer.js";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper.js";
import useOnline from "../utils/useOnline.js";

//same as of RestaurantCards(restaurantList[0]); this is the return value pf bodyComponent
const Body = () =>{
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [ filteredRestaurants, setFilteredRestaurants] = useState([]) // prev it is restaurantlist as a params,
    const [ searchText, setSearchText ] = useState(); //return an array(variable, func to set variable) -- default value inside hooks as parameter
    //const [searchClicked, setSearchClicked ] = useState("false");

    useEffect(()=>{
        getRestaurants();
    },[]);
    async function getRestaurants(){
        const newdata = data;
        console.log(newdata);
        setAllRestaurants(newdata);
        setFilteredRestaurants(newdata);
    }

    const onLine =useOnline();
    if(onLine){
        return <h1>Please check your internet connection :</h1>
    }
    if(!allRestaurants) return null;
    if(filteredRestaurants?.length ===0) return <h1>No Restaurant Found</h1>
    console.log("render");
    return (filteredRestaurants.length === 0 ) ? <Shimmer/> : (
        <>
        <div className="p-2 bg-pink-50 m-5 rounded-md justify-center">
            <input type="text"  
            className="focus:bg-orange-200 p-2 m-2" 
            placeholder="search" 
            value={searchText}
            onChange={(e) =>{
                setSearchText(e.target.value);
            }}/>   
            {/* <button className="search-button" onClick={()=>{
                if(searchClicked === "false"){
                    setSearchClicked("true");
                }
                else {
                    setSearchClicked("false");
                }
                
            }}>Search</button> */}
            <button 
            className="p-2 m-2 bg-orange-400 hover:bg-orange-700 text-white justify-center rounded-md"
            onClick={()=>{
                const data = filterData(searchText,allRestaurants);
                setFilteredRestaurants(data);
                //update the state ---- restaurants
            }}>
            Search
            </button>
            {/* <h1>{searchClicked}</h1> */}
        </div>
        <div className="flex flex-wrap">
        {
            filteredRestaurants.map((restaurant) =>{
                return (
                    <Link to = {"/restaurant/" + restaurant.id}  key={restaurant.id} ><RestaurantCards {...restaurant} key={restaurant.id}/></Link>
                ) 
            })
        }
        </div>
        </>
    )
}

export default Body;