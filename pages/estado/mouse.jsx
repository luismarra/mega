import { useState } from "react"

export default function mouse() {

    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#444",
        color: "#fff",
        height: "100vh",
        fontFamily: "Arial Black",
    }

    const [x, setX] = useState(0)

    const arrayY = useState(0)    
    let y = arrayY[0]
    const setY = arrayY[1]

    function quandoMover(ev) {
        setX(ev.clientX)
        setY(ev.clientY)
    }

    return (
        <div style={estilo} onMouseMove={quandoMover}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}