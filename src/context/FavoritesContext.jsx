import { createContext, useState } from "react";

export const FavoritesContext = createContext();
export function FavoritesContextProvider({children}){
    const [favorites, setFavorites] = useState([]);
   
    const addFavorites = (newFavorites)=>{
        setFavorites(favorites=>[...favorites,newFavorites])
    
    }

    const removeFavorites =(id)=>{
        setFavorites((prevFavorites)=>prevFavorites.filter((favorite)=> favorite.id!==id))
    };

    const isFavorite=(id)=>{
        
    }
    return(
        <FavoritesContext.Provider value={{favorites,addFavorites, removeFavorites}}>
            {children}
        </FavoritesContext.Provider>
    )
}