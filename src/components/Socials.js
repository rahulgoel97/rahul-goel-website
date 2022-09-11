import React from 'react';
import { SocialIcon } from 'react-social-icons';
import '../App.css';
import icongithub from './github-icon.png';
import iconbandcamp from './bandcamp-icon.png';
import iconsoundcloud from './soundcloud-icon.png';
import icontwitter from './twitter-icon.png';
import iconemail from './email-icon.png';
import iconlinkedin from './linkedin-icon.png';





function Socials() {

  return (
    <div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="social-box">
      
      
      <a href="https://github.com/rahulgoel97">
      		<img 
      		src={icongithub}
      		style={{width:'2rem',margin:'0.5rem'}}
      		/>
      </a>

      <a href="https://bandcamp.com/rahulgoel"> 
      		<img 
      		src={iconbandcamp}
      		style={{width:'3rem',margin:'0.5rem'}}
      		/>
      </a>

      <a href="https://tinyurl.com/shivxbigother">
      		<img 
      		src={iconsoundcloud}
      		style={{width:'2rem',margin:'0.5rem'}}
      		/>
      </a>


      <a href="https://twitter.com/rahulxgoel">
      		<img 
      		src={icontwitter}
      		style={{width:'2.2rem',margin:'0.6rem'}}
      		/>
      </a>

      <a href="mailto:mail@rahulg.xyz">
      		<img 
      		src={iconemail}
      		style={{width:'1.8rem',margin:'0.7rem'}}
      		/>
      </a>

       <a href="https://tinyurl.com/linkrahul">
       		<img 
      		src={iconlinkedin}
      		style={{width:'1.9rem',margin:'0.5rem'}}
      		/>
      </a>  
    </div>
    </div>
  );
}

export default Socials;
