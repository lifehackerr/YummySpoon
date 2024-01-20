import { Link, Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import ProfileFunction from "./ProfileFunction";
import React from "react";

class About extends React.Component {
    constructor(props){
        super(props);
        
        console.log("parent---Constructor called");
    }
    componentDidMount(){
        console.log("parent---componentDidMount called");
    }
    render(){
        console.log("parent---render");
        return (
            <div>
                <Link to= "profile"><h1>About Me..</h1></Link>
                <p>Hi we are trying to build a food delivery react app</p>
                {/* <ProfileFunction name = {"DevFUn"}/> */}
                <ProfileClass name = {"DevClass"}/>
            </div>
        ) 
    }
}

export default About;




/*
Rendering if 2 children of parents
--parent constructor
--parent render
    child1 constructor
    child1 render
    child2 constructor
    child2 render
    child1 didMount
    child2 didMount
parent disMount
*/
