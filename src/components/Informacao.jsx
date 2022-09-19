import { useState } from "react";
import { faChartPie, faDragon, faGamepad, faBolt, faArrowTrendUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Evolucoes } from "./Evolucoes";
import { Movimentos } from "./Movimentos";
import { Jogos } from "./Jogos";
import { StatusBase } from "./StatusBase";
import { InformacoesBasicas } from "./InformacoesBasicas";

export function Informacao(props) {
    
    const [btnSelecionado, setBtnSelecionado] = useState(1);
    const selecionado = "informacao__botao bc-blue f-branco b-branco";
    const naoSelecionado = "informacao__botao bc-branco f-azul b-azul";
    

    function selecionar(e) {
        let id = e.currentTarget.getAttribute('value');
        id = id ? parseInt(id) : 1;
        setBtnSelecionado(id);
    }

    return (
        <div className="informacao">
            <div className="informacao__botoes">
                <span value="1" onClick={selecionar} className={btnSelecionado === 1 ? selecionado : naoSelecionado}>
                    <FontAwesomeIcon icon={faDragon}/>
                </span>
                <span value="2" onClick={selecionar} className={btnSelecionado === 2 ? selecionado : naoSelecionado}>
                    <FontAwesomeIcon icon={faChartPie}/>
                </span>
                <span value="3" onClick={selecionar} className={btnSelecionado === 3 ? selecionado : naoSelecionado}>
                    <FontAwesomeIcon icon={faGamepad}/>
                </span>
                <span value="4" onClick={selecionar} className={btnSelecionado === 4 ? selecionado : naoSelecionado}>
                    <FontAwesomeIcon icon={faBolt}/>
                </span>
                <span value="5" onClick={selecionar} className={btnSelecionado === 5 ? selecionado : naoSelecionado}>
                    <FontAwesomeIcon icon={faArrowTrendUp}/>
                </span>
            </div>
            <div className="informacao__dados">
                {(() => {
                    if (btnSelecionado === 1) {
                        return ( 
                            <InformacoesBasicas pokemon={props.pokemon} />
                        )
                    } else if (btnSelecionado === 2) { 
                        return ( 
                            <StatusBase pokemon={props.pokemon} />
                        )
                    } else if (btnSelecionado === 3) { 
                        return ( 
                            <Jogos pokemon={props.pokemon} />
                        )
                    } else if (btnSelecionado === 4) { 
                        return ( 
                            <Movimentos pokemon={props.pokemon} />
                        )
                    } else if (btnSelecionado === 5) { 
                        return ( 
                            <Evolucoes pokemon={props.pokemon} />
                        )
                    }  
                    
                })()}
            </div>
        </div>
    )

}

export default Informacao;