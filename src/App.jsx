import { useEffect } from "react"
import useFetch from "./useFetch"
import { FavoritesContextProvider } from "./context/FavoritesContext";
import RecipesList from "./components/RecipesList";
export default function App(){
  const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
  const {recipe}=useFetch(url);
  console.log(recipe)
  return(
    <FavoritesContextProvider>
      <div>
        <RecipesList url={url} />
      </div>
    </FavoritesContextProvider>
   
  );
}