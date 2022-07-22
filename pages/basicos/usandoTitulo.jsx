import Titulo from "../../components/Titulo";

export default function usandoTitulo() {
    return (
        <div>
            <h1>Usando Título</h1>
            <hr />
            <Titulo
                principal="Página de Cadastro"
                secundario="Incluir, Alterar e excluir coisas!"
            />
            <hr />
            <Titulo
                principal="Página de login"
                secundario="Informe seu e-mail e senha"
                pequeno = {true}
            />
            <hr />
            <Titulo
                principal="Página de Teste"
                secundario="Informe alguma coisa"
                pequeno = {false}
            />
        </div>
    )
}