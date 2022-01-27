import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocialMediaButtons from 'react-social-media-buttons';
import Socials from './components/Socials.js'
import NavbarComponent from './components/NavbarComponent.js';

function Ideas() {

  return (
    <div className="App">
    
        <NavbarComponent />  

        <div className="page-title"> 
             Ideas 😲
        </div>   

        <p className="main-page-sub-p  "> I hunt for the most original, thought provoking & contrarian ideas. Here are ideas that have impacted my thinking, summarized here for your pleasure. 
<br/><br/>
        Upcoming: Notes on Nicholas Nassim Taleb, Peter Theil (vs Marc Andreesen, vs David Graeber), Paul Graham, Ruth Porat, David Graeber, Justice Scalia, Keith Rabois, Ried Hoffman, Mellody Hobson, Chomsky, Damodaran.  </p>

      <Socials />

    </div>
  );
}

export default Ideas;
