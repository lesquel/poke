import { useEffect, useState } from "react";
export function useFetch(url) {
    const [resul, setResul] = useState({carga: true, data : null})
    
    const getData = async ()=>{
        let res = await fetch(url)
        let json = await res.json()
        setResul({carga: false, data : json})
    }
    useEffect(()=>{
        getData()
    }, [url])

    return resul
}