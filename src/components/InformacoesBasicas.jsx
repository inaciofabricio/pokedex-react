export function InformacoesBasicas(props) { 

    return (
        <div>
            <div className="informacao__dados___div">
                <span className="informacao__dados___titulo">Informações Básicas:</span>
            </div>
            <div>
                <div className="informacao__dados___div">
                    <span className="informacao__dados___label">Nº: </span>
                    <span className="informacao__dados___valor">{props?.pokemon?.id}</span>
                </div>
                <div className="informacao__dados___div">
                    <span className="informacao__dados___label">Nome: </span>
                    <span className="informacao__dados___valor">{props?.pokemon?.nome}</span> 
                </div>
                <div className="informacao__dados___div">
                    <span className="informacao__dados___label">Altura: </span>
                    <span className="informacao__dados___valor">{props?.pokemon?.altura}</span> 
                </div>
                <div className="informacao__dados___div">
                    <span className="informacao__dados___label">Peso: </span>
                    <span className="informacao__dados___valor">{props?.pokemon?.peso}</span>
                </div>
                <div className="informacao__dados___div">
                    <span className="informacao__dados___label">Tipo: </span>
                    <span className="informacao__dados___valor">{props?.pokemon?.tipo}</span>
                </div>
            </div>
        </div>
    )
}