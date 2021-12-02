import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocialMediaButtons from 'react-social-media-buttons';
import Socials from './components/Socials.js'
import NavbarComponent from './components/NavbarComponent.js';

function StressCalc() {

  return (
    <div className="StressCalcAppPage">
    
        <NavbarComponent />  

        <div className="page-title-stresscalc"> 
             StressCalc
        </div>   

        <p className="main-page-sub-p  "> Coming Soon! </p>

      <Socials />

    </div>
  );
}

export default StressCalc;
