export function Jogos(props) {

    const scrollJogos = props?.pokemon?.jogos.length > 30 ? "scroll" : "";

    return (
        <div>
            <div className="informacao__dados___div">
                <span className="informacao__dados___titulo">Jogos:</span>
            </div>

            { 
                props?.pokemon?.jogos.length === 0 
                && 
                <div>
                    <div className="informacao__dados___div">
                        <span className="informacao__dados___label">...</span>
                    </div>
                </div>
            }

            { 
                props?.pokemon?.jogos.length > 0 
                && 
                <div className={`informacao__dados___badges ${scrollJogos}`}>
                {
                    props?.pokemon?.jogos.map((obj, x) => {
                        return (
                            <span key={x} className="informacao__dados___badge bc-branco f-preta b-preta">{obj.nome}</span>
                        )
                    })
                }                                    
                </div>
            }
        </div>
    )
}