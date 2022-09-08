import React from 'react';
import logo from './logo.svg';
import './App.css';
import SocialMediaButtons from 'react-social-media-buttons';
import Socials from './components/Socials.js'
import NavbarComponent from './components/NavbarComponent.js';
import BookCard from './components/BookCard.js';
import paulg from './components/paulg.jpeg';
import taleb from './components/taleb.jpeg';
import petert from './components/petert.jpeg';
import hoffman from './components/hoffman.jpeg';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Books() {

  
  return (
    <div className="App">
    
        <NavbarComponent />  

        <div className="page-title"> 
            Books I loved
        </div>  

        
          <div className="book-card-grid">

              <BookCard
                 link={paulg}
                 buy={"https://www.amazon.com/Hackers-Painters-Big-Ideas-Computer/dp/1449389554"}/>

              <BookCard
                 link={taleb}
                 buy={"https://www.amazon.com/Fooled-Randomness-Hidden-Markets-Incerto/dp/0812975219/ref=sr_1_1?crid=3N4REW5BYL6H3&keywords=fooled+by+randomness&qid=1662612810&s=books&sprefix=fooled+%2Cstripbooks%2C327&sr=1-1"}/>

              <BookCard
                 link={petert}
                 buy={"https://www.amazon.com/s?k=zero+to+one&i=stripbooks&crid=Q0JALFK8ZMBC&sprefix=zero+%2Cstripbooks%2C149&ref=nb_sb_ss_ts-doa-p_1_5"}/>

              <BookCard
                 link={hoffman}
                 buy={"https://www.amazon.com/Blitzscaling-Lightning-Fast-Building-Massively-Companies/dp/1524761419/ref=sr_1_1?crid=1FF3TZ8PS1JIN&keywords=blitzscaling&qid=1662612866&s=books&sprefix=BLIT%2Cstripbooks%2C115&sr=1-1"}/>

          </div>

        
      <Socials />

    </div>
  );
}

export default Books;
