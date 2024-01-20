import imageee from "../images/logo.png";
import { useEffect, useState ,useContext} from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline.js";
import UserContext from "../utils/userContext.js";

export const Title = () =>(
    <a href = "/">
    <img className="h-24 p-2" alt= "logo" src= {imageee} />
    </a>
)

const Header = () => {

    const [isLoggedIn, setLoggedIn] = useState(false);
    const isOnline = useOnline(true);
    const {user} = useContext(UserContext);

    useEffect(()=>{
        console.log("useEffect")
    },[isLoggedIn])
    console.log("rendering...");
    return (
    <div className="flex justify-between bg-pink-50 shadow-lg">
        <Title/>
        <div className="nav-items">
        <ul className="flex py-10" >
        <li className="px-2"> <Link to= "/">Home</Link></li>
        <li className="px-2"><Link to= "/About">About</Link></li>
        <li className="px-2"><Link to = "/Contact">Contact us</Link></li>
        <li className="px-2">Cart</li>
        <li className="px-2"><Link to = "/Instamart">Instamart</Link></li>
        </ul>
        </div>
        <h1 className=" p-10 text-red-600 py-10">
            Hiii {user.name}
        </h1>
        
        <h1 className=" py-10 px-2">{isOnline ? <button className="text-red-900">Red</button> : <button className="text-green-900">🟢</button> }</h1>
        {
            isLoggedIn ? <Link to = "/Login"><button className="py-1" onClick={(e) =>{setLoggedIn(false)}}>Log out</button></Link> : <Link to = "/Login"><button className="py-1"  onClick={(e) =>{setLoggedIn(true)}}>Log in</button></Link> 
        }
    </div>
    )
}
export default Header;