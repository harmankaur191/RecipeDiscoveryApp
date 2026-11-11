import { useParams } from "react-router-dom"
import useFetch from "../useFetch";
import { Link } from "react-router-dom";
export default function CategoryPage(){
    const {categoryName} = useParams();
    const url=`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`;
    const {data, loading,error} = useFetch(url);
    const recipes =data?.meals || [];
    return(<div>
        <h1>{categoryName}</h1>
        <div>{recipes.map((recipe)=>(
            <Link key={recipe.idMeal}></Link>
        ))}

        </div>
    </div>)
}