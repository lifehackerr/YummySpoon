import { useContext } from "react"
import UserContext from "../utils/userContext"
const RestaurantCards = ({image,name,cousins,stars}) =>{
    const {user} = useContext(UserContext);
    //const {image,name,cousins,stars} = restaurant; // object des
    return(
        <div className="w-52 p-2 m-2 shadow-lg bg-pink-100">
            <img src={image}></img>
            <h2 className="font-bold">{name}</h2>
            <h3>{cousins.join(",")}</h3>
            <h4>{stars} Star</h4>
            <h2>{user.name}</h2>
        </div>
    )
}

export default RestaurantCards