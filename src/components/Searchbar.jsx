import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useFetch from "../useFetch";
export default function Searchbar({onSearch}){
    const [searchItem, setSearchItem] = useState('');
    const [query, setQuery] =useState('');

   
    const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
     const {data, error,loading} = useFetch(url);

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(searchItem.trim() === ''){
            return;
        }
        setQuery(searchItem.trim());
        if(onSearch){
        onSearch();
    }
    };
console.log(query)
    console.log(url)
    const recipes =data?.meals|| [];
    console.log(recipes)
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input className='border-1 border-gray-300' type='text' id='search' placeholder='Search recipes' onChange={(e)=> setSearchItem(e.target.value)} />
                <button id='submit' type='submit'>Search</button>
            </form>
         {/* {  (loading) && <p className="text-white p-6"> Loading recipes...</p>}
            { (error) && <p className="text-white p-6"> Loading recipes...</p>} */}
            <div className=" grid grid-cols-4 border-1 border-gray-400 text-white">
          
          {/* {searchItem && recipes.length>0 &&( */}
              {recipes.map((recipe)=> {
               return <Link key={recipe.idMeal} to={`/recipe/${recipe.idMeal}`} className="border-1 border-gray-200">
                <img src={recipe.strMealThumb}/>
                <p>{recipe.strMeal}</p>
               </Link>
            }
          )}
          
            </div>
        </div>
        
    )
}