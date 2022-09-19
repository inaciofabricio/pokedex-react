export function StatusBase(props) {

    return (
        <div>
            <div className="informacao__dados___div">
                <span className="informacao__dados___titulo">Status Base:</span>
            </div>

            { 
                props?.pokemon?.statusBasicos.length === 0 
                && 
                <div>
                    <div className="informacao__dados___div">
                        <span className="informacao__dados___label">...</span>
                    </div>
                </div>
            }

            { 
                props?.pokemon?.statusBasicos.length > 0 
                && 
                <div>
                {
                    props?.pokemon?.statusBasicos.map((obj, x) => {
                        return (
                            <div className="informacao__dados___div" key={x}>
                                <span className="informacao__dados___label">{obj.nome}: </span>
                                <span className="informacao__dados___valor">{obj.status}</span>
                            </div>
                        )
                    })
                }                                    
                </div>
            }
        </div>
    )
}