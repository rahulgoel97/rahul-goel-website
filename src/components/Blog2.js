import React from 'react';
import '../App.css';
import SocialMediaButtons from 'react-social-media-buttons';
import Socials from './Socials.js'
import NavbarComponent from './NavbarComponent.js';
import BlogCard from './BlogCard.js';



function Blog2() {

  
  return (
    <div className="App">
    
        <NavbarComponent />  

        <div className="blog-box">

                    <div className="blog-title"> 
                        Being Analytical - Powerlifting & Corporate Strategy
                    </div>  

                    <div className="blog-page-sub-p">October 28, 2022</div>

                    <div className="blog-title"> Blogging principles </div>
                        <li>Both are extremely analytical disciplines</li>
                        <li>Execution is extremely important - however, good execution without analytical analysis is sub-optimal</li>
                        <li>Predicated on the complex nature of underlying systems, ie: business, and biology</li>
                        <li>Differentiation is achieved by doing hard things</li>

                    <div className="blog-title"> How is strategy analytical? </div>
                    <div className="blog-page-sub-p"> Corporate strategy requires: </div>
                        <li><strong>Boring my family and friends:</strong> Obvious. I have tired out my friends and family with my ramblings on producitivity decline, competition & differentiation, the links between underground music movements, entrepreneurship, powerlifting and finance and so on.</li>
                        <li><strong>Documentation:</strong> Blogs are an excellent medium to document your intellectual journey. Most importantly, topics on which your mind has changed.</li>
                        <li><strong>Sharing:</strong> I want to share key ideas with people I am conversing with, spanning scientists, researchers, businesspersons, and others.</li>
                        <li className="blog-last"><strong>Critique:</strong> The best way to grow is to put your ideas out there for critique from the world. One must have a strong framework to accept or reject critique, and I want to hone this skill. It would be a privilege to hear your critique - feel free to email me using the social buttons below.</li>
        </div>
                
          
      <Socials />

    </div>
  );
}

export default Blog2;
