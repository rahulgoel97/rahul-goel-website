import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocialMediaButtons from 'react-social-media-buttons';
import Socials from './components/Socials.js'
import NavbarComponent from './components/NavbarComponent.js';
import ProjectCard from './components/ProjectCard.js';
import { Link } from 'react-router-dom';
import icon from './components/icon.png';
import gv from './components/gv.png';
import trackidlogo from './components/tid.png';
import palettelogo from './components/palette.png'

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
            <div className="project-summary">
                    StressCalc, an app for beginner powerlifters
            </div>
        </div>

        <div className="project-card-grid">
            <a href= "https://rahulgoel97.github.io/gamestonk-valuation/">
                                    <img
                                        src={gv}
                                        style={{width: '20vmin',
                                                borderRadius: '10px',
                                                margin: '1rem'
                                              }}
                                        /></a>
            <div className="project-summary">
                    Gamestonk Valuation, a DCF app to value gamestop shares
            </div>
        </div>

        <div className="project-card-grid">
            <a href= "https://www.tinyurl.com/track-id">
                                    <img
                                        src={trackidlogo}
                                        style={{width: '20vmin',
                                        		
                                                borderRadius: '10px',
                                                margin: '1rem'
                                              }}
                                        /></a>
            <div className="project-summary">
                    trackid, a music discovery platform for dance music DJs and fans
            </div>
        </div>

        <div className="project-card-grid">
            <a href= "https://rahulgoel97.github.io/palette/">
                                    <img
                                        src={palettelogo}
                                        style={{width: '20vmin',
                                        		
                                                borderRadius: '10px',
                                                margin: '1rem'
                                              }}
                                        /></a>
            <div className="project-summary">
                    Palette, an app to help me design systems for future projects
            </div>
        </div>
              

        <Socials />

    </div>
  );
}

export default Projects;
