import { useState } from "react";
import { Link } from "react-router-dom";
const Login = () =>{
    const [login, setLogin] = useState(false);
    return(
        <Link to= "/"><button onClick={()=>{
            setLogin(true);
        }} >CLick me to go at body page</button></Link>
    )
}
export default Login;