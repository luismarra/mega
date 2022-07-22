export default function repeticao1() {

    const listaAprovados = [
        'João',
        'Maria',
        'Ana',
        'Bia',
        'Carlos',
        'Daniel',
        'Laura',
    ]

    function renderizarLista() {
        const itens = []
        for (let i = 0; i < listaAprovados.length; i++) {
            itens.push(<li key={i}>{listaAprovados[i]}</li>)

        }
        return itens
    }

    function renderizarLista1() {
        return listaAprovados.map((nome, i) => <li key={i}>{nome}</li>)
    }

    function renderizarLista2() {
        return listaAprovados.map(function (nome, i) {
            return <li key={i}>{nome}</li>
        })
    }
    return (
        <ul>
            <h4>Usando laço for</h4>
            {renderizarLista()}
            <hr />
            <h4>Usando arrow function</h4>
            {renderizarLista1()}
            <hr />
            <h4>Usando uma função normal</h4>
            {renderizarLista2()}
        </ul>
    )
}