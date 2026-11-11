export default function RecipeItem({category}){
    
    return(
         <li key={category.idCategory}>
            {category.strCategory}

           </li>
    )
}