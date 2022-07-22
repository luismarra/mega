function mega(qtd = 6, numeros = []) {
    if (qtd < 6 || qtd > 60) {
        throw "Quantidade errada!!!"
    }
    if (numeros.length === qtd) {
        return numeros.sort((n1, n2) => n1 - n2)
    }

    const numeroInc = parseInt(Math.random() * 60) + 1
    if (!numeros.includes(numeroInc)) {
        return mega(qtd, [...numeros, numeroInc])
    } else {
        return mega(qtd, numeros)
    }
} console.log(mega())