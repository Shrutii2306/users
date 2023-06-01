import React, { useState } from "react";
import LoadingSpinner from "./components/LoadingSpinner.js";
import "./App.css";
import userIcon from "./images/Subtract.png";
import homeIcon from "./images/HOME-ICON.png";
import magnifyingGlass from  "./images/m-glass.png";
import userBig from "./images/USER-BIG.png";
import userSmall from "./images/SMALL-USER.png";
import rectangle3 from "./images/BACKGROUND-TRIANGLE-3.png";
import rectangle2 from "./images/BACKGROUND-TRIANGLE-2.png";
import rectangle1 from "./images/BACKGROUND-TRIANGLE-1.png";
export default function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const fetchUsers = () => {
    setIsLoading(true);
    fetch("https://reqres.in/api/users?page=1")
      .then((respose) => respose.json())
      .then((respose) => {
         setUsers(respose.data)
         setIsLoading(false)
         //Optional code to simulate delay
         // setTimeout(() => {
         //   setUsers(respose.data);
         //   setIsLoading(false);
         // }, 3000);
      });
  };
  const displayUser = (
    <div className="main-user-container">
    <div className="userlist-container">
      {users.map((item, index) => (
        <div className="user-container" key={index}>
          <div className="user-container-header"></div>
          <img src={item.avatar} alt="" className="avatar"/>
          <div className="userDetail">
            <div className="name">{`${item.first_name}                
                                   ${item.last_name}`}</div>
            <div className="email">{item.email}</div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
  return (
    <div className="App">

        <img src={userIcon} className="logo" alt="logo-icon"/>
        <div className="home-link">
            <img src={homeIcon} className="home-icon" alt="home-icon"/>
            <div className="home-text"><a href="index.html" className="text-link">HOME</a></div>
        </div>
        <div className={ users.length===0 ? "landing-content" : "hide"}>
        <div className="landing-background-content"> 
          <img src={magnifyingGlass} alt="" className="magnifyingGlass"/>
          <img src={userBig} alt="" className="user-big"/>
          <img src={userSmall} alt="" className="user-small"/>
        </div>
       
      

      
      <div className= "mid-content">
        <div className="get-users">GET USERS</div>
        <div className="btn">
          <button onClick={fetchUsers} disabled={isLoading}>CLICK HERE
          </button>
        </div>
        
      </div>
      </div>
      

      <div className= { users.length>0 ? "data-display" : "hide" }> 
        <img src={rectangle3} alt="" className="rectangle-3"/>
        <img src={rectangle1} alt="" className="rectangle-1"/>
        <img src={rectangle2} alt="" className="rectangle-2"/>
        <div className="heading">USER DETAILS</div>
      </div>
      
      { isLoading ? <LoadingSpinner /> : displayUser }
    </div>
  );
}