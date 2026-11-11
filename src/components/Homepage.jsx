import CategoriesList from "./CategoriesList";
import RecipesList from "./RecipesList";

export default function Homepage(){
    const categoriesUrl ='https://www.themealdb.com/api/json/v1/1/categories.php';
    return(
        <div>
            <CategoriesList url={categoriesUrl}/>
        </div>
    )
}