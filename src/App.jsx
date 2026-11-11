import { useEffect, useState } from "react"
import useFetch from "./useFetch"
import { FavoritesContextProvider } from "./context/FavoritesContext";
import CategoriesList from "./components/CategoriesList";
import RecipesList from "./components/RecipesList";
import {Routes} from 'react-router-dom';
import { Route } from "react-router-dom";
import Homepage from './components/Homepage'
import Navbar from "./components/Navbar";
import CategoryPage from "./components/CategoryPage";
export default function App(){

  return(
    <FavoritesContextProvider>
      <div className="min-h-screen bg-black text-white p-10">
        <Navbar/>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/category/:categoryName' element={<CategoryPage/>}/>
          <Route path = 'recipe/:recipeId'  element={<RecipesList/>}/>
        </Routes>
      
      </div>
    </FavoritesContextProvider>
   
  );
}