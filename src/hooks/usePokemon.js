import useApi from "./useApi";
import Pokemon from "../model/Pokemon";
import Chain from "../model/Chain";

export function  usePokemon(id) {

    const{ data: dataPokemon, error: errorPokemon, isFetching: isFetchingPokemon } = useApi(`pokemon/${id}`);

    let pokemon = new Pokemon(id, null);

    if(!errorPokemon){
        pokemon = new Pokemon(id, dataPokemon);
    } 

    const{ data: dataEpecies } = useApi(`pokemon-species/${id}`);

    let chain = new Chain(dataEpecies);

    pokemon.idChain = chain?.id;

    return { pokemon, error: errorPokemon, isFetching: isFetchingPokemon }
}