import { useState } from "react"
import Card from "./Crad"
import { useFetch } from "./fetch"

export default function Poke() {
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20")
    const {carga, data} = useFetch(url)
    return carga
        ? <div className="fixed bg-zinc-800 bg-opacity-30 w-[100%] h-[100vh] top-0 left-0 flex items-center justify-center">

            <h3 className="text-yellow-200 text-6xl">
                <samp className="animate-bounce">C</samp>
                <span className="animate-bounce">a</span>
                <span className="animate-bounce">r</span>
                <span className="animate-bounce">g</span>
                <span className="animate-bounce">a</span>
                <span className="animate-bounce">n</span>
                <span className="animate-bounce">d</span>
                <span className="animate-bounce">o</span>
            </h3>
        </div>
        : <>

            <div className="bts flex justify-evenly">
                <button className="bg-zinc-800 text-white py-3 px-5 md:px-10 m-4 [text-shadow:1px_1px_0_#fef08a,1px_1px_0_#fff] text-sm md:text-xl Frijole
                hover:[box-shadow:-5px_-5px_0px_0px_#fef08a,-10px_-10px_0px_0px_#27272a,5px_5px_0px_0px_#fef08a,10px_10px_0px_0px_#27272a]
                hover:[transition:box-shadow_.2s_ease]
                " disabled={data.previous ? false : true} onClick={()=> setUrl(data.previous)}>Anterior</button>
                <button className="bg-zinc-800 text-white py-3 px-5 md:px-10 m-4 [text-shadow:1px_1px_0_#fef08a,1px_1px_0_#fff] text-sm md:text-xl Frijole
                hover:[box-shadow:-5px_-5px_0px_0px_#fef08a,-10px_-10px_0px_0px_#27272a,5px_5px_0px_0px_#fef08a,10px_10px_0px_0px_#27272a]
                hover:[transition:box-shadow_.2s_ease]
                " disabled={data.next ? false : true} onClick={()=> setUrl(data.next)}>Siguiente</button>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 justify-items-center gap-10 my-8">
                {data.results.map((value, index) => {
                return <Card key={index} url={value.url} />} )}
            </div>

            <div className="bts flex justify-evenly">
                <button className="bg-zinc-800 text-white py-3 px-5 md:px-10 m-4 [text-shadow:1px_1px_0_#fef08a,1px_1px_0_#fff] text-sm md:text-xl Frijole
                hover:[box-shadow:-5px_-5px_0px_0px_#fef08a,-10px_-10px_0px_0px_#27272a,5px_5px_0px_0px_#fef08a,10px_10px_0px_0px_#27272a]
                hover:[transition:box-shadow_.2s_ease]
                " disabled={data.previous ? false : true} onClick={()=> setUrl(data.previous)}>Anterior</button>
                <button className="bg-zinc-800 text-white py-3 px-5 md:px-10 m-4 [text-shadow:1px_1px_0_#fef08a,1px_1px_0_#fff] text-sm md:text-xl Frijole
                hover:[box-shadow:-5px_-5px_0px_0px_#fef08a,-10px_-10px_0px_0px_#27272a,5px_5px_0px_0px_#fef08a,10px_10px_0px_0px_#27272a]
                hover:[transition:box-shadow_.2s_ease]
                " disabled={data.next ? false : true} onClick={()=> setUrl(data.next)}>Siguiente</button>
            </div>
        </>
}