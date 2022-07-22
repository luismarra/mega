import { useState } from "react";
import React from 'react';


function contador1() {

    const [resultado, setResultado] = useState(0)
    const inc = () => setResultado(resultado + 1)
    const dec = () => setResultado(resultado - 1)
    const res = () => setResultado(resultado * 0)


    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            fontSize: "2rem"
        }}>
            <div>
                <h3 >Contador #02</h3>
            </div>

            <div style={{
                display: "flex",
                justifyContent: "stretch",
                alignItems: "stretch",
                width: "50vh",
                height: "10vh",
                backgroundColor: "#efefef",
                fontSize: "16px"

            }}>
                <button style={{
                    width: "33vh"
                }} onClick={inc}>Somar</button>
                <button style={{
                    width: "33vh"
                }} onClick={dec}>Subtrair</button>
                <button style={{
                    width: "33vh"
                }} onClick={res}>Resetar</button>
            </div>

            <div style={{
                display: "flex",
                width: "50vh",
                height: "10vh",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#000",
                color: "#fff",
                marginTop: "10px"
            }}>
                Resultado
            </div>
            <div style={{
                display: "flex",
                width: "50vh",
                height: "30vh",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#444",
                color: "#fff"
            }}>
                <div>
                    <h2>{resultado}</h2>
                </div>
            </div>
        </div>

    )
}

export default contador1;