import React from "react";
class ProfileClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            count2:0,
            userInfo:{
            name: "dummyName",
            location: "dummyLocation",
            }
        }
        console.log("Constructor called !!!")
    }
    async componentDidMount(){
        //api calls
        const data  = await fetch("https://api.github.com/users/lifehackerr");
        const json = await data.json();
        this.setState({
            userInfo: json
        }) 
        console.log(json)
    }
    componentDidUpdate(){
        console.log("will be called after first resndoring and calling api then rerendoring time");
    }
    componentWillUnmount(){
        console.log("will be called just before the component to unmount");
    }

    render() {
        const {count,count2,userInfo} = this.state;
        console.log("render");
        return(
        <div>
            {/* <h1> This is a class based component.</h1>
            <h2>
                Hi my name is {this.props.name}
            </h2> */}
            <h1> my name is: {userInfo.name}</h1>
            <h3> location{userInfo.location}</h3>
            <img src={this.state.userInfo.avatar_url}></img>
            <h3>count:{count}</h3>
            <h4>count2: {count2}</h4>
            <button onClick= {
                ()=>{
                    this.setState({count:count + 1});
                    this.setState({count2:count2 + 2})
                }
            }>Click Me</button>
        </div>
            
            
        )
    }
}

export default ProfileClass;