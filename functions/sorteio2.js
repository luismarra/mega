function sorteioNum(qtd = 6, numeros = []) {

    if (qtd < 6 || qtd > 60) {
        return (
            "Quantidade Errada"
        )
    }

    if (numeros.length === qtd) {
        return numeros.sort((n1, n2) => (n1 - n2))
    }

    const numeroAleatorio = parseInt(Math.random() * 60) + 1
    if (!numeros.includes(numeroAleatorio)) {
        return sorteioNum(qtd, [...numeros, numeroAleatorio])
    } else {
        return sorteioNum(qtd, numeros)
    }
} console.log(sorteioNum())