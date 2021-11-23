import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocialMediaButtons from 'react-social-media-buttons';
import Socials from './components/Socials.js'
import NavbarComponent from './components/NavbarComponent.js';

function App() {

  return (
    <div className="App">
    
        <NavbarComponent />    
        <div className="home-contents"> 
            <h1 className="greeting-text">
             😁👋 Hi, I'm Rahul  
           </h1>
           <p className="main-page-sub-p"> I'm a corporate strategy professional with interests in critical networks, web3 & XR. Excited by technology that can dramatically reduce cost and improve access. </p>
           <p className="main-page-sub-p  "> This website is under development. </p>
        </div>     
      <Socials />

    </div>
  );
}

export default App;
