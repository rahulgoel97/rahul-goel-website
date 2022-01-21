import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocialMediaButtons from 'react-social-media-buttons';
import Socials from './components/Socials.js'
import NavbarComponent from './components/NavbarComponent.js';


function Home() {

  return (
    <div className="App">
    
        <NavbarComponent />    
        <div className="home-contents"> 
            <h1 className="greeting-text">
             😁👋 Hi, I'm Rahul  
           </h1>
           <p className="main-page-sub-p"> I'm a business strategist living in Chicago. I often think about how technology can dramatically reduce cost, improve access and forge  a path for self-actualization for everyone.</p>
           <p className="main-page-sub-p  ">Interests: powerlifting, dance music, cooking</p>
           <p className="main-page-sub-p  ">Aspiration: become a polymath</p>
           <p className="main-page-sub-p  ">Building: apps to make my life easier & have some fun</p>
             
        </div>     
      <Socials />

    </div>
  );
}

export default Home;
