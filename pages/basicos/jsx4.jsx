export default function jsx4() {

    const subtitulo = "Estou no JavaScript!"
    let name = "Luis"

    return (
        <div>
            <h1>integração JS e JSX</h1>
            <h2>{subtitulo}</h2>
            <h3>{3 * 3}</h3>
            <h4>{Math.max(13, 39)}</h4>
            <h4>{name.toLocaleUpperCase()}</h4>
            <h4>{aprovado(5, 7, 10)}</h4>
        </div>
    )
}

function aprovado(valor, min, max) {
    if(valor >= min && valor <= max) {
        return "Aprovado"
    } else {
        return "Não Aprovado"
    }
}