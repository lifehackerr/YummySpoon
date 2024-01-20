import { createContext } from "react";

const UserContext = createContext({
    user:{
    name: "Dummy name",
    email: "user@example.com",
    }
})

export default UserContext;