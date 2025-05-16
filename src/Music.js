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

        <p className="main-page-sub-p"> I mix techno, house, and other dance music under the name "bigOther", inspired by Jaques Lacan </p>


        <h2 className="music-subhead"> Mixes </h2>
        <iframe className="soundcloud-embed" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/2020738941&color=%230066cc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">2Hr set</iframe>
        <iframe className="soundcloud-embed" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1130995420&color=%230066cc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">2Hr set</iframe>
        <iframe className="soundcloud-embed" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1133822788&color=%230066cc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">2Hr set</iframe>
        <iframe className="soundcloud-embed" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/334374143&color=%230066cc&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true">2Hr set</iframe>


        <h2 className="music-subhead"> Productions </h2>

        <iframe className="bandcamp-embed" src="https://bandcamp.com/EmbeddedPlayer/track=2360701398/size=large/bgcol=333333/linkcol=9a64ff/tracklist=false/transparent=true/" seamless><a href="https://bigother97.bandcamp.com/track/taal">Taal by bigOther</a></iframe>
          
        <iframe className="bandcamp-embed" src="https://bandcamp.com/EmbeddedPlayer/album=3882008466/size=large/bgcol=333333/linkcol=9a64ff/tracklist=false/transparent=true/" seamless><a href="https://bigother97.bandcamp.com/album/translations">Translations by bigOther</a></iframe>
  
      <Socials />

    </div>
  );
}

export default Music;
