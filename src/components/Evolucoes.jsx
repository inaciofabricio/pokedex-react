import { useEvolucao } from "../hooks/useEvolucao";

export function Evolucoes(props) {
    
    const { data } = useEvolucao(props?.pokemon?.idChain, props?.pokemon);

    const getStyle = (obj) => { 
        return obj.atual ? "bc-verde" : "bc-branco";
    };

    return ( 
        <div>
            <div className="informacao__dados___div">
                <span className="informacao__dados___titulo">Evoluções:</span>
            </div>
            { 
                data.length === 0 
                && 
                <div>
                    <div className="informacao__dados___div">
                        <span className="informacao__dados___label">...</span>
                    </div>
                </div>
            }

            { 
                data.length > 0 
                && 
                <div className="informacao__dados___badges">
                {
                    data.map((obj, x) => {
                        return (
                            <span key={x} className={`informacao__dados___badge f-preta b-preta ${getStyle(obj)}`}>{obj.nome}</span>
                        )
                    })
                }                                    
                </div>
            }
        </div>
    )
}