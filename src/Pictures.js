import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocialMediaButtons from 'react-social-media-buttons';
import Socials from './components/Socials.js'
import NavbarComponent from './components/NavbarComponent.js';

function Pics() {

  return (
    <div className="App">
    
        <NavbarComponent />  

        <div className="page-title"> 
             Pics 👀
        </div>   

        <p className="main-page-sub-p  "> Coming Soon! </p>

      <Socials />

    </div>
  );
}

export default Pics;
