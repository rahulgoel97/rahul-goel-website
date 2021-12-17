import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocialMediaButtons from 'react-social-media-buttons';
import Socials from './components/Socials.js'
import NavbarComponent from './components/NavbarComponent.js';


function Music() {

  return (
    <div className="App">
    
        <NavbarComponent />    
         <div className="page-title"> 
             Music 🎵
        </div>   

        <iframe className="bandcamp-embed" src="https://bandcamp.com/EmbeddedPlayer/track=2360701398/size=large/bgcol=333333/linkcol=9a64ff/tracklist=false/transparent=true/" seamless><a href="https://bigother97.bandcamp.com/track/taal">Taal by bigOther</a></iframe>
          
        <iframe className="bandcamp-embed" src="https://bandcamp.com/EmbeddedPlayer/album=3882008466/size=large/bgcol=333333/linkcol=9a64ff/tracklist=false/transparent=true/" seamless><a href="https://bigother97.bandcamp.com/album/translations">Translations by bigOther</a></iframe>
  
      <Socials />

    </div>
  );
}

export default Music;
