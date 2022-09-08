import React from "react";
import '../App.css';

const BookCard = ({link, buy}) =>{
    
    return(
        
        <div className="book-card">
        
     		<a href={buy}><img className="book-cover" src={link}/></a>


        </div>



    );
} 

export default BookCard;
