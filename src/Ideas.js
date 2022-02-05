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
                  {quote: "Instead of patiently writing out a complete program and assuring myself it was correct, I tended to just spew out code that was hopelessly broken...For a long time I felt bad about this, just as I once felt bad that I didn't hold my pencil the way they taught me to in elementary school. Only if I had looked at other makers, the painters, or the architects, I would have realized there was a name for what I was doing: sketching", 
                  author: "Paul Graham, Hackers & Painters"},
    ]
  }

console.log(quote)

  return (
    <div className="App">
    
        <NavbarComponent />  

        <div className="page-title"> 
            Quote
        </div>  

        <p className="main-page-sub-p  "> "{quote.body[0].quote}"</p>
        <p className="main-page-sub-p  "> -{quote.body[0].author} </p>


        <div className="page-title"> 
             Ideas 😲
        </div>   

        <p className="main-page-sub-p  "> Upcoming: Notes on Nicholas Nassim Taleb, Peter Theil (vs Marc Andreesen, vs David Graeber), Paul Graham, Ruth Porat, David Graeber, Justice Scalia, Keith Rabois, Ried Hoffman, Mellody Hobson, Chomsky, Damodaran.  </p>

      <Socials />

    </div>
  );
}

export default Ideas;
