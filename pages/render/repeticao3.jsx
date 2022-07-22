
import listaProdutos from '../../data/listaProduto'

export default function repeticao3() {
    function renderizarLinhas() {
        return listaProdutos.map(produto => {
            return (
                <tr key={produto.id}>
                    <td style={comBorda}>{produto.id}</td>
                    <td style={comBorda}>{produto.nome}</td>
                    <td style={comBorda}>{produto.preco}</td>
                </tr>
            )
        })
    }

    const comBorda = {
        border: "1px solid #000"
    }

    return (
        <div>
            <table style={comBorda}>
                <thead>
                    <tr style={comBorda}>
                        <th style={comBorda}>ID</th>
                        <th style={comBorda}>Nome</th>
                        <th style={comBorda}>Preço</th>
                    </tr>
                </thead>
                <tbody >
                    {renderizarLinhas()}
                </tbody>
            </table>
        </div>
    )
}