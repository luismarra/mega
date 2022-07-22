import { Component } from "react";
import Contador from "../../components/Contador";

export default class ContadorPage extends Component {

    render() {
        return (
            <div style={{
                display: "flex",
                justifyContent: "center",
                //alignItems:"center",
                flexWrap: "wrap",
                backgroundColor: "#222",
                color: "#fff",
                margin: "5px",
                padding: "5px",
                borderColor: "#fff"

            }}>
                <Contador valorInicial={100} passo={500} />
            </div>
        )
    }

}