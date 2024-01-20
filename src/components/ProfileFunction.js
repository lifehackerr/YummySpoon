import { useState,useEffect } from "react";
const ProfileFunction = (props) =>{
    const [count,setCount] = useState(0);
    const [count2,setCount2] = useState(0);
    useEffect(() => {
        //api calls
        console.log("useEffect")
    })
    console.log("Render");
    return(
    <div>
    {console.log("inside return")};
    <h1>Hiii this is a profile function component!!!!</h1>
    <h2>my name is : {props.name}</h2>
    <h3>count: {count}</h3>
    <h3>count2: {count2}</h3>
    <button onClick = {()=>{
        setCount(count => count +1),
        setCount2(count2 => count2 +2)
    }}>Click Me</button> 
    </div>
    );
};
export default ProfileFunction;
//HEre we learned how to make counter in React