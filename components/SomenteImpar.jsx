
export default function SomenteImpar(props) {
    const numeroImpar = props.numero % 2 != 0
    return (
        <div>
            {numeroImpar ?
                <span>{props.numero}</span> :
                null}
        </div>
    )
}

