import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError]=useState(null);
  
    useEffect(() => {
        if(!url){
            setLoading(false);
            setData(null);
            return;
        }

        const fetchApi = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                if(!response.ok){
                    throw new Error(`HTTP error! Status:${response.status}`);
                }
                const res = await response.json();
                
                setData(res);
                setError(null)
            } catch (e) {
                setError(e.message);
            }
        };
        
            fetchApi();
        
    }

        , [url])

    return { data, loading, error};
}