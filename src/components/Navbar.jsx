import { Link } from "react-router-dom";

export default function Navbar(){
    return(
        <nav >
            <div className="flex flex gap-5">
                <Link to='/'>Home</Link>
                <Link to='/favorites'>Favorites</Link>
            </div>
        </nav>

    )
}