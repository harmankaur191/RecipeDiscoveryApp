import { useParams } from "react-router-dom"
import useFetch from "../useFetch";

export default function RecipePage(){
    const {recipeId}=useParams();
    const url= recipeId? `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`:null;
    const {data, error, loading} =  useFetch(url);
//  console.log(url);
    const recipe = data?.meals?.[0];
    if(!recipe){
       return <p>Recipe not found</p>
}
      console.log(recipe);
    // if(loading) return <p className="text-white p-6"> Loading recipes...</p>
    // if(error) return <p className="text-white p-6"> Loading recipes...</p>
   const ingredients = [];
   for (let i=1;i<=20;i++){
    const ingredient = recipe[`strIngredient${i}`];
   
    const measure =recipe[`strMeasure${i}`];
    if(ingredient){
        ingredients.push({
            id:i,
            ingredient:ingredient,
            measure: measure
    });

    }
 
   }


    return(
        <div>
            <h1>{recipe.strMeal}</h1>
        <p>{recipe.strCategory}, {recipe.strArea}</p>
        <img src={recipe.strMealThumb}/>
        <div> {!ingredients?
        <p>Error</p>:
              <ul className="text-white">{ingredients.map((ingredient)=>{
            return <li className="text-white" key={ingredient.id}>{ingredient.ingredient}- {ingredient.measure}</li>
        })}
           
        </ul>}
        </div>
        </div>
    )
}