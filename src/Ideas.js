import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocialMediaButtons from 'react-social-media-buttons';
import Socials from './components/Socials.js'
import NavbarComponent from './components/NavbarComponent.js';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Ideas() {

  const quote={
                body:[
                  {quote: 
                      "Instead of patiently writing out a complete program and assuring myself it was correct, I tended to just spew out code that was hopelessly broken...For a long time I felt bad about this, just as I once felt bad that I didn't hold my pencil the way they taught me to in elementary school. Only if I had looked at other makers, the painters, or the architects, I would have realized there was a name for what I was doing: sketching", 
                  author: 
                      "Paul Graham, Hackers & Painters",
                  takeaway: "Imperfection is a starting point for novel creativity."},


                  {quote: 
                    "The cultural, or institutional rule is: no polymaths allowed. You can be narrowly specialized, and if you are interested in other things, you better keep it to yourself and not tell people... because if say you are interested in computer science and also music or studying the Hebrew bible, well, that must mean you are just not very serious about computer science", 
                  author: 
                    "Peter Theil, The Portal",
                    takeaway: "No, Don't 'focus'!"},


                  {quote: 
                    "If you're in the US and go to a good school, there are a lot of forces that will push you towards following traintracks laid by others rather than charting a course yourself. Make sure that the things you're pursuing are weird things that you want to pursue, not whatever the standard path is. Heuristic: do your friends at school think your path is a bit strange? If not, maybe it's too normal.",
                  author: 
                    "Patrick Collison",
                    takeaway: "Don't commoditize yourself."},

                  {quote:
                    "A 15% return with 10% volatility (or uncertainty) per annum translates into a 93% probability of success in any given year. But seen at a narrow time scale, this translates into a mere 50.02% probability of success over anny givenn second",
                  author: 
                    "Nassim Taleb, Fooled By Randomness",
                  takeaway: 
                    "Those checking stock prices every day, or expecting fast results are charlatans, foolish, or both. QED!"},
    ]
  }

var indexValue = getRandomInt(4)
console.log("Congratulations, you have found all the quotes I have here...")
console.log(quote)

  return (
    <div className="App">
    
        <NavbarComponent />  

        <div className="page-title"> 
            Random Quote
        </div>  

        <p className="main-page-sub-p  "> {quote.body[indexValue].quote}</p>
        <p className="main-page-sub-p  "> -{quote.body[indexValue].author} </p>
        <p className="main-page-sub-p  "> My takeaway: {quote.body[indexValue].takeaway} </p>


        <div className="page-title"> 
             Is innovation slowing?
        </div>   

        <p className="main-page-sub-p  "> 
          <a href = "https://patrickcollison.com/fast">1. Fast (Collison) </a>
          <br/>
          <a href = "https://www.youtube.com/watch?v=3r5erdsX6kE&ab_channel=ThePortalClips">2. Secular stagnation & why it matters (Theil, Weinstein)</a>
          <br/>
          <a href = "https://www.bls.gov/opub/mlr/2021/article/the-us-productivity-slowdown-the-economy-wide-and-industry-level-analysis.htm"> 3. BLS - Productivity Slowdown (Sprague) </a>
        </p>

        <div className="page-title"> 
             Not obvious
        </div> 
        <p className="main-page-sub-p  "> 
        <a href="http://www.paulgraham.com/conformism.html"> 1. The Four Quadrants of Comformism (Graham) </a>
        <br/>
          <a href="https://www.youtube.com/watch?v=ii1jcLg-eIQ"> 2. Before The Startup (Graham) </a>
        </p>
      <Socials />

    </div>
  );
}

export default Ideas;
