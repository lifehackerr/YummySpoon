import { useRouteError } from "react-router-dom";
const Error = () =>{
    const err = useRouteError();
    return( <>
        <b><h1> {err.status} : {err.statusText}</h1></b>
        <h1><i> OOPS !! Wrong route</i></h1>
        <h2> Please check your route and try again</h2>

    </>
        
    )
}
export default Error;