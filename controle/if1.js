function soBoaNoticia(nota){
    if(nota >=7) {
        console.log('Aprovado com ' + nota)
    }
}
soBoaNoticia(8.1)
soBoaNoticia(6.1)

function seForVerdadeEuFalo(valor) {
    if(valor){
        console.log('E verdade...' + valor)
    }
}
seForVerdadeEuFalo() // esse vaidar falso pois não tem valor undefined
seForVerdadeEuFalo(null)// esse também vai dar falso
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)//também é falso
seForVerdadeEuFalo('')//também é falso
seForVerdadeEuFalo(0)//também é falso
seForVerdadeEuFalo(-1)//já é verdadeiro
seForVerdadeEuFalo(' ')//também é verdadeiro
seForVerdadeEuFalo(' ?')//também é verdadeiro
seForVerdadeEuFalo([])//array vazio, também é verdade
seForVerdadeEuFalo([1, 2])// array com valores também é verdadeiro
seForVerdadeEuFalo({})//objeto vazio também é verdade