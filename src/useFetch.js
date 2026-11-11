import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [recipe, setRecipe] = useState(null);
    useEffect(() => {

        const fetchApi = async () => {
            try {

                const response = await fetch(url);
                const data = await response.json();
                
                setRecipe(data);
            } catch (e) {
                console.log(e)
            }
        };
        
            fetchApi();
        
    }

        , [url])


    return { recipe };
}