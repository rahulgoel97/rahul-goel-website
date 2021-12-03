import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocialMediaButtons from 'react-social-media-buttons';
import Socials from './components/Socials.js'
import NavbarComponent from './components/NavbarComponent.js';
import ProjectCard from './components/ProjectCard.js';
import { Link } from 'react-router-dom';
import icon from './components/icon.png';
function Projects() {

  return (
    <div className="App">
    
        <NavbarComponent />    
        <div className="page-title"> 
            
             Projects 👨🏽‍💻
        </div>  

        
        <div className="project-card-grid">
            <Link to="/StressCalc"> <img
                                        src={icon}
                                        style={{width: '20vmin',
                                                borderRadius: '10px',
                                                margin: '1rem'
                                               }}        
                                    /></Link>
        </div>  

        <Socials />

    </div>
  );
}

export default Projects;
