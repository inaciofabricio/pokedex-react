import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { usePokemon } from "../hooks/usePokemon";
import Informacao from "./Informacao";
import img404 from "../assets/img/404.png"

export function Pokemon() {
    
    let [id, setId] = useState(1);
    const { pokemon, error, isFetching } = usePokemon(id);
    const btnDisablitado = pokemon && pokemon.id === 1 ? "bc-cinza f-cinza b-cinza" : "bc-branco f-azul b-azul";
    const usandoImg404 = pokemon.img ? `pokemon__img ${pokemon?.tipo.toLowerCase()}` : "pokemon__img bc-404";   

    function proximo() {
        setId(id+1);
        return 1
    }

    function anterior() {
        if(id > 1) {
            setId(id-1);
        }
    }

    return (
        <>
            <div className="pokemon">
                <div className={usandoImg404}>
                    <img src={pokemon?.img ? pokemon?.img : img404}  alt={`Foto do ${pokemon?.nome}`}></img>
                </div>
                <div className="pokemon__info">
                    <div className="pokemon__id">#{pokemon?.id}</div>
                    <div className="pokemon__nome">{pokemon?.nome}</div>
                    <div className="pokemon__setas">
                        <span className={`pokemon__seta ${btnDisablitado}`} onClick={anterior}><FontAwesomeIcon icon={faArrowLeft} /></span>
                        <span className="pokemon__seta bc-branco f-azul b-azul" onClick={proximo}><FontAwesomeIcon icon={faArrowRight} /></span>
                    </div>
                </div>
            </div>
            <Informacao pokemon={pokemon} proximo={proximo} error={error} isFetching={isFetching} />
        </>
    );
}
