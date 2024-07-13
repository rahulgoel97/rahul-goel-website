import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocialMediaButtons from 'react-social-media-buttons';
import Socials from './components/Socials.js'
import NavbarComponent from './components/NavbarComponent.js';
import Selfie from './components/Selfie5.jpg';
import CanFlag from './components/can.png';


function Home() {

  return (
    <div className="App">
    
        <NavbarComponent />    
        <div className="home-contents"> 


            <div className="home-intro-box">
                <img src={Selfie} className="selfie"/>
                <h1 className="greeting-text">
                       Rahul Goel
                </h1>

            </div>

            <div className="main-page-p-box">
                <p className="main-page-sub-contact"> (416) 561 8175 | rahulgol97@gmail.com </p>
                <p className="main-page-sub-p"> I'm a strategy professional based in Chicago, currently at Motorola Solutions. I focus on research & quantiative analysis for strategic projects and tech M&A. </p>
                <p className="main-page-sub-p  "> I grew up in New Delhi & Mumbai, studied engineering at Northwestern University and have lived in Chicago since 2015. I often think about how technology can dramatically reduce cost, improve access and forge a path for self-actualization for everyone.  </p>
                <p className="main-page-sub-p  ">Interests: <a href="https://www.instagram.com/p/C2Tird-rOqa/">powerlifting</a>, <a href="https://bandcamp.com/rahulgoel">dance music</a> & cooking</p>
                <p className="main-page-sub-p  ">Aspiration: become a polymath</p>
                <p className="main-page-sub-p  ">Building: apps to learn about technology, make my life easier & have some fun</p>
            </div>

        </div>     
      <Socials />

    </div>
  );
}

export default Home;
