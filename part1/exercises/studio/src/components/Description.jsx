import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor () {
    let authorLink = "https://natashaskitchen.com/egg-roll-in-a-bowl-recipe/"; 
    let authorPhoto = "https://natashaskitchen.com/wp-content/uploads/2023/02/NK-Head-Red-Shirt-small.png"; 
    let authorName = "Natasha Kravchuk"; 

   return (
      <>
        <div className = {styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt = "Reasonable alt text" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Natasha&#39;s Kitchen</a> 
            </div>
        </div>
      </>
   );
}

class RecipeDescription extends React.Component {
    render() {
       return(
        <div> 
            <div>
                <h1>Egg Roll in a Bowl</h1>
                <p>A delicious, healthy twist on a classic Chinese-takeout favorite.</p>
            </div>
            <RecipeAuthor />
        </div>
       );
    }
 }

 export default RecipeDescription; 