import { useState } from "react"
import NumeroDisplay from "../../components/NumeroDisplay"

export default function contador() {

    const [resultado, setResultado] = useState(0)
    const inc = () => setResultado(resultado + 10)
    const dec = () => setResultado(resultado - 10)
    const res = () => setResultado(resultado * 0)

    return (
        <>
            <div style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column"
            }}>
                <h1>CONTADOR</h1>
                <NumeroDisplay resultado={resultado} />

                <div>
                    <button onClick={inc}>+</button>

                    <button onClick={() => {
                        setResultado(resultado - 10)
                    }}>-</button>

                    <button onClick={res}>0</button>
                </div>
            </div>

        </>

    )
}