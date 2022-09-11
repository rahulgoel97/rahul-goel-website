import React from "react";
import '../App.css';

const BookCard = ({title, blurb, date, id, themes}) =>{
    
    return(
        
        <div className="blog-card">
        	
     		<a href={id}>

     			<h1>{title}</h1>


     		</a>

     		<p className="main-page-sub-p">{blurb}</p>
     		<p className="main-page-sub-p">{date}</p>

     		<div className="blog-themes-box">

	     		{themes.map((theme, index) =>(
	     			<div className="blog-themes"> {theme} </div>))}
	     	</div>

	 

        </div>



    );
} 

export default BookCard;
