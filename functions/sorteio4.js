function sorteado(qtd = 6, numeros = []) {
    if (qtd < 1 || qtd > 11) {
        throw "Quantidade errada!!!"
    }

    if (numeros.length === qtd) {
        return numeros.sort((n1, n2) => (n1 - n2))
    }

    const numerosAleatorios = parseInt(Math.random() * 11) + 1
    if (!numeros.includes(numerosAleatorios)) {
        return sorteado(qtd, [...numeros, numerosAleatorios])
    } else {
        return sorteado(qtd, numeros)
    }

}

//console.log(sorteado(1))
console.log(parseInt(Math.random() * 11) + 1)