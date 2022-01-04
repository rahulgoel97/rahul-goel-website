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
           <p className="main-page-sub-p"> I'm fascinated by emerging technology: critical networks, XR and web3. I often think about how technology can dramatically reduce cost, improve access and forge  a path for self-actualization for everyone.</p>
           <p className="main-page-sub-p  ">Every step of the way, to everyone around us, we should be asking the question, what are you building? What are you building directly, or helping other people to build, or teaching other people to build, or taking care of people who are building? </p>
             
        </div>     
      <Socials />

    </div>
  );
}

export default Home;
