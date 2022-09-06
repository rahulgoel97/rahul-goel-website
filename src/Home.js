import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocialMediaButtons from 'react-social-media-buttons';
import Socials from './components/Socials.js'
import NavbarComponent from './components/NavbarComponent.js';
import Selfie from './components/selfie.jpg'


function Home() {

  return (
    <div className="App">
    
        <NavbarComponent />    
        <div className="home-contents"> 


            <div className="home-intro-box">
                <img src={Selfie} className="selfie"/>
                <h1 className="greeting-text">
                       😁👋 Hi, I'm Rahul 
                </h1>

            </div>

            <div className="main-page-p-box">
                <p className="main-page-sub-p"> I'm currently in the process of moving to Toronto 🇨🇦 and work at Motorola Solutions. I grew up in India and previously studied at Northwestern University, living in Chicago for 7 years. </p>
                <p className="main-page-sub-p  ">I often think about how technology can dramatically reduce cost, improve access and forge  a path for self-actualization for everyone.</p>
                <p className="main-page-sub-p  ">Interests: powerlifting, dance music, cooking</p>
                <p className="main-page-sub-p  ">Aspiration: become a polymath</p>
                <p className="main-page-sub-p  ">Building: apps to make my life easier & have some fun</p>
            </div>

        </div>     
      <Socials />

    </div>
  );
}

export default Home;
