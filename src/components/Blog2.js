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

                    <div className="blog-page-sub-p">December 22, 2022</div>

                    <div className="blog-title"> Being Analytical - Powerlifting & Corporate Strategy </div>
                        <li>Both are extremely analytical disciplines</li>
                        <li>Execution is extremely important - however, good execution without analytical analysis is sub-optimal</li>
                        <li>Predicated on the complex nature of underlying systems, ie: business, and biology</li>
                        <li>Differentiation is achieved by doing hard things</li>

                    <div className="blog-title"> How is strategy analytical? </div>
                    <div className="blog-page-sub-p"> Corporate strategy requires: </div>
                        <li><strong>Being analytical:</strong> Corporate strategy is extraordinary analytical. Complex problems must be broken down simply, since it is critical to only spend time on important and valuable issues. Powerlifting, similarly, requires an analytical framework involving programming, nutrition, recovery.</li>
                        <li><strong>Strong understand of the business:</strong> The complexity of problems forces practioners to deeply understand the theory of the underlying business. In powerlifting, one must deeply understand biology and the theory of strength - the contribution of muscular size, neural adaptations and the impact of recovery.</li>
                        <li className="blog-last"><strong>Being fact-based:</strong> Data is the engine of understanding key facts about the business, customers, etc. In business, this can be seen in terms of metrics such as market share, growth, customer value, margins. In powerlifting, one must track nutrition to the gram, changes in estimates of your strength, body weight and so on. </li>
                       
        </div>
                
          
      <Socials />

    </div>
  );
}

export default Blog2;
