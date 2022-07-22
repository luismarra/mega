
import { useEffect, useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"
import { mega } from "../../functions/mega"



export default function mega_sena() {

    const [qtd, setQtd] = useState(6)
    const [numeros, setNumeros] = useState([])

    useEffect(() => {
        setNumeros(mega())
    }, [])

    function renderizarNumeros() {
        return numeros.map(
            numero => <NumeroDisplay key={numero} resultado={numero} />
        )
    }
    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column"
        }}>
            <h1>Mega Sena</h1>

            <div style={{
                padding: "20px"
            }}>
                <input style={{
                    width: "10vh",
                    height: "5vh",
                    fontSize: "16px"
                }}
                    type="number"
                    min={6} max={20}
                    value={qtd}
                    onChange={ev => setQtd(ev.target.value)} />

                <button class="ui primary button">
                    Save
                </button>

                <button style={{
                    width: "33vh",
                    height: "5vh"
                }} onClick={() => setNumeros(mega(qtd))}>
                    Gerar Aposta
                </button>
            </div>

            <div style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center"
            }}>
                {renderizarNumeros()}
            </div>

        </div>
    )
}
