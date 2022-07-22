
export function mega(quantidade = 6, numeros = []) {
    let qtd = +quantidade
    if (qtd < 6 || qtd > 60) {
        throw "Quantidade Inválida!"
    }

    if (numeros.length === qtd) {
        return numeros.sort((n1, n2) => n1 - n2)
        //n1-n2 reordena em ordem crescente, e n2-n1 em decrescente
    }

    const numerosAleatorio = parseInt(Math.random() * 60) + 1
    if (!numeros.includes(numerosAleatorio)) {
        return mega(qtd, [...numeros, numerosAleatorio])
    } else {
        return mega(qtd, numeros)
    }
}

//console.log(mega())

