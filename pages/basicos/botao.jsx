function acao1() {
    console.log("AÇÃO 1")
}

export default function botao() {
    function acao2() {
        console.log("AÇÃO 2")
    }

    function acao5(e) {
        console.log(e)
    }

    return (
        <div>
            <div>
                <input type="text" onChange={e => console.log(e.target.value)} />
            </div>
            <button onClick={acao1} >Click #01</button>
            <button onClick={acao2} >Click #02</button>

            <button onClick={function () {
                console.log("Ação 3")
            }} >Click #03</button>

            <button onClick={() => console.log("Ação 4")}>
                Click #04
            </button>

            <button onClick={e => acao5(e.altKey)}>
                Click #05
            </button>
        </div>
    )
}