import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocialMediaButtons from 'react-social-media-buttons';
import Socials from './components/Socials.js'
import NavbarComponent from './components/NavbarComponent.js';
import Selfie from './components/Selfie4.jpg';
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
                <p className="main-page-sub-p"> I'm a strategy professional based in Toronto <img src={CanFlag} className="flag"/>, currently working at Motorola Solutions. I grew up in India, studied at Northwestern University and lived in Chicago for 7 years. </p>
                <p className="main-page-sub-p  ">I often think about how technology can dramatically reduce cost, improve access and forge  a path for self-actualization for everyone </p>
                <p className="main-page-sub-p  ">Interests: <a href="https://www.youtube.com/shorts/ehkMWH7Jg5o">powerlifting</a>, dance music, cooking</p>
                <p className="main-page-sub-p  ">Aspiration: become a polymath</p>
                <p className="main-page-sub-p  ">Building: apps to learn about technology, make my life easier & have some fun</p>
            </div>

        </div>     
      <Socials />

    </div>
  );
}

export default Home;
