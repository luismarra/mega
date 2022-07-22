import { useState } from "react";

function formulario() {

    const [valor, setValor] = useState("inicial")

    function alterarInput() {
        setValor(valor + "!")
    }

    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}>
                <h1>Formulário #01</h1>
                <span>Testando input</span>
                <br />
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "14px"
            }}>
                <input type="text" value={valor}
                    onChange={e => setValor(e.target.value)} />
                <button onClick={alterarInput}>Alterar</button>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "14px",
                backgroundColor: "#444",
                color: "#fff",
                marginTop: "20px"
            }}>
                <p>{valor}</p>
            </div>
        </>
    )
}

export default formulario;