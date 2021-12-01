import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocialMediaButtons from 'react-social-media-buttons';
import Socials from './components/Socials.js'
import NavbarComponent from './components/NavbarComponent.js';
import ProjectCard from './components/ProjectCard.js';

function Projects() {

  return (
    <div className="App">
    
        <NavbarComponent />    
        <div className="page-title"> 
            
             Projects 👨🏽‍💻
        </div>  

        
        <div className="project-card-grid">
             <ProjectCard name="Test"/>
             <ProjectCard name="Test"/>
             <ProjectCard name="Test"/>
             <ProjectCard name="Test"/>
             <ProjectCard name="Test"/>    
        </div>  

        <Socials />

    </div>
  );
}

export default Projects;
