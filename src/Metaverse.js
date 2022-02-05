import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocialMediaButtons from 'react-social-media-buttons';
import Socials from './components/Socials.js'
import NavbarComponent from './components/NavbarComponent.js';
import goellabsgif from './components/goellabs.gif'

function Pics() {

  return (
    <div className="App">
    
        <NavbarComponent />  

        <div className="page-title"> 
             Metaverse  👀
        </div>   

        <p className="main-page-sub-p  "> Coming Soon! I hope to showcase 3D models built in Blender and Unity here. 
<br/><br/>
I'm deeply excited by what virtual and augmented reality can do for our world, and I cannot help but think about how I can contribute to building it.</p>

    <p className="main-page-sub-p  "> A flask, representing experiments, made in Blender </p>
    <img src = {goellabsgif} width="50%"/>
    
      <Socials />

    </div>
  );
}

export default Pics;
