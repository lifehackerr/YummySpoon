import { useState } from "react";
const Section = ({title, description,isVisible,setSectionConfig}) =>{
    // const [isVisible, setIsVisible] = useState(false);
    return (
        <div className="border border-black p-2 m-2">
           <h3 className="font-bold"> {title}</h3>
           {isVisible ? <button className="cursor-pointer underline" onClick={(e)=>{
            setSectionConfig(false);
           }}>Hide</button>: <button className="cursor-pointer underline" onClick={(e)=>{
            setSectionConfig(true);
           }}>show</button>}
           {isVisible && <p>{description}</p>}
        </div>
    )
}
const Instamart = () =>{
    const [sectionConfig, setSectionConfig] = useState({
        showAbout: false,
        showTeam : false,
        showCareers : false,
        showProducts : false
    })
    return(
    <div>
        <h1 className="text-2xl p-2 m-2">Instamart...</h1>
        <Section title = {"About Instamart"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} 
        isVisible = {sectionConfig.showAbout} 
        setSectionConfig = {() => setSectionConfig({
            showAbout: true,
        })}/>
        <Section title = {"Team Instamart"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
        isVisible = {sectionConfig.showTeam}
        setSectionConfig = {() => setSectionConfig({
            showTeam : true,
        })}
        />
        <Section title = {"Careers in Instamart"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} 
        isVisible = {sectionConfig.showCareers}
        setSectionConfig = {() => setSectionConfig({
            showCareers : true, 
        })}
        />
        <Section title = {"Products in Instamart"} description={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."} 
        isVisible = {sectionConfig.showProducts} 
        setSectionConfig = {() => setSectionConfig({
            showProducts : true
        })}/>
    </div>
    )
}
export default Instamart;