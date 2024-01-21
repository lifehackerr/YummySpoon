import React, { lazy,Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js" //default import
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";
import { createBrowserRouter as Router, RouterProvider , Outlet } from "react-router-dom";  //name import 
import About from "./components/About.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import Login from "./components/Login.js";
import Cart from "./components/Cart.js";
import ProfileClass from "./components/ProfileClass.js";
import Shimmer from "./components/shimmer.js";
import userContext from "./utils/userContext.js";
import { Provider } from "react-redux";
import store from "./utils/store.js";
//config driver ui -- kind of ui which is handled by backend


//lazy loading
//dynamic bundling
//chunking
//code splitting
//on demand loading
//dynamic imports

const Instamart = lazy(()=> import ("./components/Instamart.js")); //lazy loading a component so that bundler make a different bundle for this.
const AppLayout = () =>{
    const [user, setUser] = useState({
        name: "Omiii",
        email : "omiii@gmail.com",
    });

    return (
        <Provider store= {store}>
            <userContext.Provider value = {{user :user}}>
            <Header/>
            <Outlet/>
            </userContext.Provider>
            <Footer/> 
        </Provider>
    )
}
//useCOntect provider will provide the dynamic value and should be wrapper over the components we need to change the valuw

const appRouter = Router([
    {
        path : "/",
        element : <AppLayout/>,
        errorElement : <Error/>,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/About",
                element : <About/>,
                children : [
                    {
                        path : "profile",
                        element :<ProfileClass/>
                    }
                ]
            },
            {
                path : "/contact",
                element : <Contact/>
            },
            {
                path : "/restaurant/:id",
                element : <RestaurantMenu/>
            },{
                path : "/login",
                element : <Login/>
            },{
                path : "/Instamart",
                element : <Suspense fallback = {<Shimmer/>}><Instamart/> </Suspense>
                // suppose this instamart bundle takes few sec to load so
                //in between we need to render some other componet, for that we use fallback function that returns a component and it will be rendered till the time bundle not loaded
            },
            {
                path : "/cart",
                element : <Cart/>
            }
        ],
    }, 
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading); //render react element
root.render(<RouterProvider router={appRouter} />); //render component
