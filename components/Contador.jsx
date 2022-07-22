import { Component } from "react";

class Contador extends Component {

    constructor(props) {
        super(props)

        this.state = {
            numero: props.valorInicial ?? 0,
            passo: props.passo ?? 1
        } // opcional usar o sate dentro do construtor, se for usar fora o this tem que vir antes de props e não precisa no state   
    }


    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }
    dec = () => {
        this.setState({
            numero: this.state.numero - this.state.passo
        })
    }
    alterarPasso = (ev) => {
        this.setState({ passo: +ev.target.value })
    }

    renderForm() {

        return (
            <>
                <input type="number" min={1} max={1000}
                    value={this.state.passo}
                    onChange={this.alterarPasso} />
                <button onClick={this.dec}>-</button>
                <button onClick={this.inc}>+</button>
            </>
        )
    }

    render() {
        return (
            <div>
                <h1>Contador (usando components)</h1>
                <h2>{this.state.numero}</h2>
                {this.renderForm()}

            </div>
        )
    }
}

export default Contador