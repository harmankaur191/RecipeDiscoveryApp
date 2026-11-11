import { FavoritesContext } from "../context/FavoritesContext"
import useFetch from "../useFetch"
import RecipeItem from "./RecipeItem";

export default function RecipesList({url}){
   const {recipe} = useFetch(url);
   const categories = recipe?.categories || [];
   console.log(categories)
    return(
        <ul className="flex flex">
           { categories.map((category)=>(
            <RecipeItem category={category} />
           ))}
        </ul>
    )

}