import recipedata from "./recipe.json";

function IngredientList() {
  let ingredients = recipedata[1].ingredients; 
  const listOfIngredients = (props) => {
    return props.map((ingredient) => <li key={props.index}>{ingredient}</li>);
  };

  return(
    <>
    <div>
      <h3>Ingredients</h3>
      <ul>{listOfIngredients(ingredients)}</ul>
    </div>
    </>
   );
 }
 
 export default IngredientList;
 
//import json file for the data
//use a nested map to get inside the inner array
 