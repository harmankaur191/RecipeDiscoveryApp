import { FavoritesContextProvider } from "./context/FavoritesContext";
import {Routes} from 'react-router-dom';
import { Route } from "react-router-dom";
import Homepage from './components/Homepage'
import Navbar from "./components/Navbar";
import CategoryPage from "./components/CategoryPage";
import RecipePage from "./components/RecipePage";
import Searchbar from "./components/Searchbar";
export default function App(){

  return(
    <FavoritesContextProvider>
      <div className=" flex flex-col min-h-screen bg-black text-white p-10 gap-5">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/search' element={<Searchbar/>}/>
          <Route path='/category/:categoryName' element={<CategoryPage/>}/>
          <Route path = 'recipe/:recipeId'  element={<RecipePage/>}/>
        </Routes>
      </div>
    </FavoritesContextProvider>
   
  );
}