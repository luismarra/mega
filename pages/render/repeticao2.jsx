export default function repeticao2() {

    const listaAprovados = [
        'Pedro',
        'Paulo',
        'Diogo',
        'Chico',
        'Albuquerque',
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


    return (
        <>
            <ul>
                <h3>Utilizando laço for</h3>
                <h3>{listaAprovados.length}</h3>
                {renderizarLista()}
                <h3>Utilizando arrow function</h3>
                <h3>{listaAprovados.length}</h3>
                {renderizarLista1()}
            </ul>
        </>
    )
}