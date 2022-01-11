import React from 'react';
import './App.css';
import SocialMediaButtons from 'react-social-media-buttons';
import Socials from './components/Socials.js'
import NavbarComponent from './components/NavbarComponent.js';
import icon  from './components/icon.png';
import screen1 from './components/Screen1.png';
import screen2 from './components/Screen2.png';
import screen3 from './components/Screen3.jpg';
import screen4 from './components/Screen4.png';
import screen5 from './components/Screen5.jpg';
import applestore from './components/apple-app-store.jpeg';
import googlestore from './components/google-app-store.png';

function StressCalc() {

  return (
    <div className="StressCalcAppPage">
    
        <NavbarComponent />  
        <div className="stresscalc-logo-and-header">
            <img 
                src={icon}
                style={{width:'10vmin', height: '10vmin',marginTop: '5vmin',  borderRadius:'10px'}}/><div className="page-title-stresscalc">StressCalc 
            </div>
       
         </div>   

        <p className="main-page-sub-p-stresscalc  "> Minimalist RPE calculator for lifters </p>
       
        <div className="store-buttons"> 
        <a href="https://apps.apple.com/al/app/stresscalc-rpe-calculator/id1587780631"><img
            style={{height:'10vmin'}}
            src={applestore}/></a>

        <a href="https://play.google.com/store/apps/details?id=com.goellabs.stresscalc&hl=en_US&gl=US"><img
            style={{height:'8vmin'}}
            src={googlestore}/></a>

        <a href="https://www.producthunt.com/posts/stresscalc?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-stresscalc">
            <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=326328&theme=dark" alt="StressCalc - Minimal RPE calculator for lifters | Product Hunt" 
            style={{height:'5.5vmin'}}/></a>
    
        </div>

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
