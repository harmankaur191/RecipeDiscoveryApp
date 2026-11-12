import { useParams } from "react-router-dom"
import useFetch from "../useFetch";
import { Link } from "react-router-dom";
export default function CategoryPage(){
    const {categoryName} = useParams();
    const url=`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`;
    const {data, loading,error} = useFetch(url);
    const recipes =data?.meals || [];
    // console.log(recipes)
    return(<div >
        <h1>{categoryName}</h1>
        <div className="grid grid-cols-4 gap-4">{recipes.map((recipe)=>(
            <Link to={`/recipe/${recipe.idMeal}`} key={recipe.idMeal}>
                <img src={recipe.strMealThumb} className=""/>
                <span>{recipe.strMeal}</span>
            </Link>
        ))}

        </div>
    </div>)
}