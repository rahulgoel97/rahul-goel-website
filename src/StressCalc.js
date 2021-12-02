import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocialMediaButtons from 'react-social-media-buttons';
import Socials from './components/Socials.js'
import NavbarComponent from './components/NavbarComponent.js';
import screen1 from './components/Screen1.png';
import screen2 from './components/Screen2.png';
import screen3 from './components/Screen3.jpg';
import screen4 from './components/Screen4.png';
import screen5 from './components/Screen5.jpg';


function StressCalc() {

  return (
    <div className="StressCalcAppPage">
    
        <NavbarComponent />  

        <div className="page-title-stresscalc"> 
             StressCalc 
        </div>   

        <p className="main-page-sub-p-stresscalc  "> Banish math in the gym </p>
        <img
            className="stresscalc-screenshots" 
            src={screen1}
            />

        <img
            className="stresscalc-screenshots"
            src={screen2}
            />

        <img
            className="stresscalc-screenshots"
            src={screen3}
            />

        <img
            className="stresscalc-screenshots"
            src={screen4}
            />

        <img
            className="stresscalc-screenshots"
            src={screen5}
            />
             
     <Socials />

    </div>
  );
}

export default StressCalc;
