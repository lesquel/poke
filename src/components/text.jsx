import { useFetch } from "./fetch"

export function TextPoke({url}) {
    const {carga, data} = useFetch(url)

    return carga ? <h1>Cargando</h1>
    : <p>
        <b>Generacion</b>
        <br />
        <span>
            {data.generation.name}
        </span>
    </p>
}