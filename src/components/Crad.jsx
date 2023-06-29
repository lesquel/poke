
import { useEffect } from "react"
import { useFetch } from "./fetch"
import "./style.css"
import { TextPoke } from "./text"
export default function Card({ url }) {
    const { carga, data } = useFetch(url)

    return carga ?
        <div className="Card bg-zinc-800 min-w-[220px] md:w-[80%] min-h-[220px] rounded-lg text-white px-4 pb-4 m-5 relative
            [&:hover>*>*]:[transition:all_.2s_ease]
            [&:hover>div>img]:scale-[2] [&:hover>div>img]:-translate-y-3.5 [&:hover>div>h1]:text-left
            [transition:box-shadow_.2s_ease-in]
            hover:[transition:box-shadow_.2s_ease-in]
            [box-shadow:10px_10px_0px_0px_#fef08a,20px_20px_0px_0px_#27272a]
            hover:[box-shadow:-10px_-10px_0px_0px_#fef08a,-20px_-20px_0px_0px_#27272a]">

           <h3 className="text-center text-3xl">Cargando</h3>

        </div>

        : <div className="Card bg-zinc-800 min-w-[220px] md:w-[80%] min-h-[220px] rounded-lg text-white px-4 pb-4 m-5 relative
         [&:hover>*>*]:[transition:all_.2s_ease]
         [&:hover>div>img]:scale-[2] [&:hover>div>img]:-translate-y-3.5 [&:hover>div>h1]:text-left
         [transition:box-shadow_.2s_ease-in]
         hover:[transition:box-shadow_.2s_ease-in]
         [box-shadow:10px_10px_0px_0px_#fef08a,20px_20px_0px_0px_#27272a]
         hover:[box-shadow:-10px_-10px_0px_0px_#fef08a,-20px_-20px_0px_0px_#27272a]" key={data.id}>

            <div>
                <img className="md:w-[150px] m-auto" src={data.sprites.front_default} alt="" />

            </div>
            <div className="py-3 Fredericka">
                <h1 className="text-center px-2 mb-4 text-xl sm:text-xl lg:text-3xl font-bold Frijole uppercase text-[#fff] [text-shadow:1.5px_1.5px_0px_#fff] [overflow-wrap:break-word]">{data.name}</h1>
                <TextPoke url={data.species.url} />


            </div>

        </div>
}