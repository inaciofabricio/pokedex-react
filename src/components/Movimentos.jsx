export function Movimentos(props) {

    const scrollMovimento = props?.pokemon?.movimentos.length > 30 ? " scroll" : "";

    return (
        <div>
            <div className="informacao__dados___div">
                <span className="informacao__dados___titulo">Movimentos:</span>
            </div>

            { 
                props?.pokemon?.movimentos.length === 0 
                && 
                <div>
                    <div className="informacao__dados___div">
                        <span className="informacao__dados___label">...</span>
                    </div>
                </div>
            }

            { 
                props?.pokemon?.movimentos.length > 0 
                && 
                <div className={`informacao__dados___badges ${scrollMovimento}`}>
                {
                    props?.pokemon?.movimentos.map((obj, x) => {
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