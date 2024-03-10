import React from 'react';
import classes from './HobbyLinks.module.css';

export default function HobbyLinks() {
    const hobbyLinks = ["https://letterboxd.com", "https://www.nytimes.com/crosswords"]
    const listTitle = "Links to My Hobbies"; 

    return (
      <div>
         <h3>{listTitle}</h3>
         <p><a href = {hobbyLinks[0]}>Letterboxd </a></p>
         <p><a href = {hobbyLinks[1]}>New York Times Games</a></p>
      </div>      
    );
}