import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const[userData,setuserData]=useState({name:"",bio:"",img:"",followers:0,pb:0,portfolio:0,location:""})
  return (
    <>
    <div id="searchbar">
    <input id="userName" type="text" placeholder="Enter User Name: Eg. farmantasleem"/>
    <button onclick="getData()">Get Data</button>


</div>
<div id="content">
    <img id="image" src="https://th.bing.com/th/id/OIP.Kc2eyEH1-Xc6Cl3ltZCFNAAAAA?pid=ImgDet&w=360&h=360&rs=1" alt=""/>
    <div>
        <div>
            <h1>Name : <span id="name">{userData.name||"Name"}</span></h1>
            <p>Location: <span id="location">{userData.location||"Location"}</span></p>
            <p>Follower: <span id="follower">{userData.followers||0} followers</span></p>
            </div>
           <div>
            <p>Portfolio : <a href={userData.portfolio||"/"}id="portfolio">Portfolio</a></p>
            <p>Public Repos: <span id="repo">{userData.pr||0}</span></p>
            <p>Bio: <span id="bio">{userData.bio||"Bio"}</span></p>
           </div>
    </div>
</div>

    </>

  );
}

export default App;
