import { createContext } from "react";

const userContext = createContext({
    user:{
    name: "Omkesh Varshney",
    email: "user@example.com",
    }
})

export default userContext;