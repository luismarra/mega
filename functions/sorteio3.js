function sorteio(qtd = 6, numeros = []) {

    if (qtd < 6 || qtd > 60) {
        throw "Quantidade Errada!"
    }
    if (numeros.length === qtd) {
        return numeros.sort((n1, n2) => (n1 - n2))
    }

    const numerosAleatorios = parseInt(Math.random() * 60) + 1

    if (!numeros.includes(numerosAleatorios)) {
        return sorteio(qtd, [...numeros, numerosAleatorios])
    } else {
        return sorteio(qtd, numeros)
    }
} console.log(sorteio(20))
