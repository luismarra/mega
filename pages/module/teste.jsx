import
Padrao, { Comp1 as Teste1, Comp2, Comp4, Comp5, Comp6 }
    from "../../components/modulo/funcionais"

export default function teste() {
    return (
        <div>
            <Teste1 />
            <Comp2 />
            <Padrao />
            <Comp4 />
            <Comp5 />
            <Comp6 msg="Legallll" />
        </div>
    )
}
