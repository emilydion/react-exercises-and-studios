import React from 'react';
import classes from './BookList.module.css';

export default function BookList() {
   let pageTitle = "Books I Read This Month";
   let book1 = "https://upload.wikimedia.org/wikipedia/commons/1/14/Misery_%281987%29_front_cover%2C_first_edition.jpg";
   let book2 = "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1622355533i/4667024.jpg";
   let book3 = "https://m.media-amazon.com/images/I/91wKDODkgWL._AC_UF1000,1000_QL80_.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} alt="Misery by Steven King" />
         <img src={book2} alt="The Help By Kathryn Stockett" />
         <img src={book3} alt="Harry Potter and the Sorcerer's Stone by J.K. Rowling" />
      </div>      
   );
}