import { useContext } from "react";
import UserContext from "../utils/userContext"
const Footer = () =>{
    const {user} = useContext(UserContext)
    return(
        <h4 className="w-full h-64 static bottom-0">Made in ♥ by {user.name}</h4>
    )
}
export default Footer;