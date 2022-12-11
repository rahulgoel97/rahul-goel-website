import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocialMediaButtons from 'react-social-media-buttons';
import Socials from './components/Socials.js'
import NavbarComponent from './components/NavbarComponent.js';
import BlogCard from './components/BlogCard.js';



function Blog() {

  
  return (
    <div className="App">
    
        <NavbarComponent />  

        <div className="page-title"> 
            Blog
        </div>  

        <BlogCard
            title="Being Analytical - Powerlifting & Corporate Strategy"
            blurb="Success in powerlifiting and strategy both require extraordinary analytical rigor."
            date="October 28, 2022"
            id="#blog2"
            themes={["Read time: 5min ⌛", "Powerlifting", "Corporate Strategy"]} />

        <hr/>

        <BlogCard
            title="Blogging principles & why blog?"
            blurb="What are the drivers behind starting this blog? Mostly, bored family & friends."
            date="September 11, 2022"
            id="#blog1"
            themes={["Read time: 4min ⌛", "Principles", "First Post"]} />

        
          
      <Socials />

    </div>
  );
}

export default Blog;
