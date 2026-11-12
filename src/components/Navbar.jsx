import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav >
            <div className="flex flex gap-5 bg-red-700 text-white text-xl p-5">
                <Link to='/'>Home</Link>
                <Link to='/search'>Search Recipes</Link>
                <Link to='/favorites'>Favorites</Link>
            </div>
        </nav>

    )
}