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
                <p className="main-page-sub-contact"> (773) 837 1963 | rahulgol97@gmail.com </p>
                <p className="main-page-sub-p"> Strategist at the intersection of tech M&A and product.  </p>
                <p className="main-page-sub-p  "> I studied engineering at Northwestern University and have lived in Chicago since 2015. I often think about how data and technology can keep people safe, improve access and forge a path for self-actualization for everyone.  </p>
                <p className="main-page-sub-p  ">Interests: <a href="https://www.instagram.com/p/C2Tird-rOqa/">powerlifting</a>, <a href="https://bandcamp.com/rahulgoel">dance music</a> & cooking</p>
                <p className="main-page-sub-p  ">Building: Apps for <a href="https://apps.apple.com/al/app/stresscalc-rpe-calculator/id1587780631">powerlifting</a>, finance and music</p>
                <p className="main-page-sub-p  ">I document my thoughts on books, finance, and technology on my <a href="https://rahulsdojo.substack.com/">blog</a></p>
            </div>

        </div>     
      <Socials />

    </div>
  );
}

export default Home;
