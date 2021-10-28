import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocialMediaButtons from 'react-social-media-buttons';
import Socials from './components/Socials.js'

function App() {

  return (
    <div className="App">
      <header className="App-header">
     
        <h1 className="greeting-text">
          😁👋 Hi, I'm Rahul  
        </h1>
        <p className="main-page-sub-p"> I'm a corporate strategy professional with interests in critical networks, web3 & XR. Excited by technology that can dramatically reduce cost and improve access. </p>
        <p className="main-page-sub-p  "> This website is under development. </p>
        
         <p className="main-page-p"> Music 🎵 </p>
         <p className="main-page-p"> Software 👨🏽‍💻 </p>
         <p className="main-page-p"> Pictures 👀</p>
         <p className="main-page-p"> <a href = "https://mirror.xyz/0x1426FAF5B6F335313ddEce3D5d4aAdD39525e44d/wzsIaOk8uOe6CFIAxthNCt9q43H_mbXJ9MsSaigIhcQ">Blog 💭</a></p>
         <Socials />


       
      </header>

    </div>
  );
}

export default App;
