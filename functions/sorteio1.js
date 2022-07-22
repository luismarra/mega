function sorteioNum(qtd = 6, numeros=[]){

    if (qtd < 6 || qtd > 20 ){
        return "Quantidade Errada"
    }

    if (numeros.length === qtd){
        return numeros.sort((n1, n2) => (n1 - n2))
    }

    const nSorteado = parseInt(Math.random() *60) +1
    if (!numeros.includes(nSorteado)){
        return sorteioNum(qtd, [...numeros, nSorteado])
    } else {
        return sorteioNum(qtd, numeros)
    }
} console.log(sorteioNum(20))