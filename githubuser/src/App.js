import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const[userName,setuserName]=useState("")

  async function getData(){    
    const resp=await fetch(`https://api.github.com/users/${userName}`);
    const {avatar_url,bio,followers,location,name,blog,public_repos}=await resp.json()
    setuserData({name,bio,img:avatar_url,followers,location,portfolio:blog,pr:public_repos})
  }

  const[userData,setuserData]=useState({name:"",bio:"",img:"",followers:0,pr:0,portfolio:0,location:""})
  return (
    <>
    <div id="searchbar">
    <input id="userName" value={userName} onChange={(e)=>{setuserName(e.target.value)}} type="text" placeholder="Enter User Name: Eg. farmantasleem"/>
    <button onClick={getData}>Get Data</button>


</div>
<div id="content" style={{display:userData.name?"flex":"none"}}>
    <img id="image" src={userData.img} alt=""/>
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
