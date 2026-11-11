import { Link } from "react-router-dom";
export default function CategoryItem({category}){
   
    return(
        <Link to={`/category/${category.strCategory}`}> <li>
            <img src={category.strCategoryThumb} className="border-1 border-gray-700"/>
            <span>{category.strCategory}</span>
           </li></Link>
    );
}