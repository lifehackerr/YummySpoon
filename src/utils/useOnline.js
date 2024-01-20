import { useState ,useEffect} from "react"

const useOnline = () => {
    const [isOnline, setIsOnline] = useState(false);

    useEffect(()=>{
        const handleOnline = () => { setIsOnline= true};
        const handleOffline = ()=>{setIsOnline = false}
        window.addEventListener("onLine", handleOnline);
        window.addEventListener("offLine", handleOffline);
        return () =>{
            window.removeEventListener("onLine", handleOnline);
            window.removeEventListener("offLine", handleOffline);
        }

    },[])
    return isOnline;
}
export default useOnline