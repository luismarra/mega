function numerosSorteados(qtd = 6, numeros = []) {

    let nMax = +35

    if (qtd < 6 || qtd > nMax) {
        throw "Quantidade Errada!!!"
    }
    if (numeros.length === qtd) {
        return numeros.sort((n1, n2) => (n1 - n2))
    }

    const addNum = parseInt(Math.random() * nMax) + 1
    if (!numeros.includes(addNum)) {
        return numerosSorteados(qtd, [...numeros, addNum])
    } else {
        return numerosSorteados(qtd, numeros)
    }
}
console.log(numerosSorteados(8))