import recipedata from "./recipe.json";
import styles from "./styling.css"; 

function AuthorInfo() {
  return (
    <>
    <div>
      <h3>{recipedata[1].author}</h3>
      <img src={recipedata[1].authorImage} className="authorImage"></img>
      <a href={recipedata[1].website}>Natasha's Kitchen</a>
    </div>
    </>
  );
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 