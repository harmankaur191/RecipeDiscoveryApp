import { FavoritesContext } from "../context/FavoritesContext"
import useFetch from "../useFetch"
import CategoryItem from "./CategoryItem";

export default function CategoriesList({url}){
   const {data} = useFetch(url);
   const categoriesArr = data?.categories || [];
   
    return(
        <ul className="grid grid-cols-4 gap-5 ">
           { categoriesArr.map((category)=>(
            <CategoryItem key={category.idCategory} category={category} />
           ))}
        </ul>
    )

}