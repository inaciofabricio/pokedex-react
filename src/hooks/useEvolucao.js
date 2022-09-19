import Evolucao from "../model/Evolucao";
import useApi from "./useApi";

export function  useEvolucao(id, pokemon) {

    const{ data } = useApi(`evolution-chain/${id}`);
    let evolucoes = [];

    const getEvolucoes = (obj, array) => {

        if(obj !== undefined) {
            let atual = (obj?.species?.name.toLowerCase() === pokemon?.nome.toLowerCase()) ? true : false;
            if(typeof obj?.species?.name == "string"){
                array.push(new Evolucao(obj?.species?.name, atual));
            }
            getEvolucoes(obj?.evolves_to[0], array);
        } else {
            evolucoes = array;
        }         
    }

    if(data){
        getEvolucoes(data.chain, []);
    }

    return { data: evolucoes }
}