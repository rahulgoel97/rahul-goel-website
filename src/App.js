import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocialMediaButtons from 'react-social-media-buttons';
import Socials from './components/Socials.js'

function App() {

  return (
    <div className="App">
      <header className="App-header">
     
        <h1 className="greeting-text">
          😁👋 Hi, I'm Rahul  
        </h1>

       
        
         <p className="main-page-p"> Music 🎵 </p>
         <p className="main-page-p"> Software 👨🏽‍💻 </p>
         <p className="main-page-p"> Pictures 👀</p>
         <p className="main-page-p"> Blog 💭</p>
         <Socials />


       
      </header>

    </div>
  );
}

export default App;
