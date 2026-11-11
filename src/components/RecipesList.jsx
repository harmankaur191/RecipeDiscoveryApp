import { useEffect, useState } from "react";

export default function RecipesList({selectedCategory}){
    const [recipes, setRecipes] = useState([]);
    useEffect(()=>{
        const fetchRecipesByCategory = async()=>{
        try{
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectedCategory}`)
            const data = await res.json();
            console.log(data)
            setRecipes(data)
        }catch(e){
            console.log(e)
        }
    }
    fetchRecipesByCategory();
    },[selectedCategory])
    
return(
    <ul>
        <li>

        </li>
    </ul>
)
}