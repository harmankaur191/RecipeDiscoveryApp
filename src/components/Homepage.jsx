import CategoriesList from "./CategoriesList";
import Searchbar from "./Searchbar";
import { useState } from "react";
export default function Homepage(){
    const categoriesUrl ='https://www.themealdb.com/api/json/v1/1/categories.php';
   const [hasSearched, setHasSearched] = useState(false)
   const handleReset=()=>{
    setHasSearched(false)
   }
    return(
        <div>
            <Searchbar onSearch={()=>setHasSearched(true)} onReset ={handleReset}/>
                {!hasSearched && <CategoriesList url={categoriesUrl}/>

                }
           
            
        </div>
    )
}