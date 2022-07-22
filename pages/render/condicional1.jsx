import SomentePar from "../../components/SomentePar";
import SomenteImpar from "../../components/SomenteImpar";

export default function condicional1() {
    return (
        <div>
            <h2>Somente Par</h2>
            <SomentePar numero={1}/>
            <SomentePar numero={2}/>
            <SomentePar numero={3}/>
            <SomentePar numero={4}/>
            <SomentePar numero={5}/>
            <SomentePar numero={6}/>
            <SomentePar numero={7}/>
            <SomentePar numero={8}/>
            <SomentePar numero={9}/>
            <SomentePar numero={10}/>
            <hr />
            <h2>Somente Impar</h2>
            <SomenteImpar numero={1}/>
            <SomenteImpar numero={2}/>
            <SomenteImpar numero={3}/>
            <SomenteImpar numero={4}/>
            <SomenteImpar numero={5}/>
            <SomenteImpar numero={6}/>
            <SomenteImpar numero={7}/>
            <SomenteImpar numero={8}/>
            <SomenteImpar numero={9}/>
            <SomenteImpar numero={10}/>
        </div>
    )
}