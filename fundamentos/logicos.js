function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2 // ||-> operador lógico do tipo ou
    const comprarTv50 = trabalho1 && trabalho2 //&& operador lógico do tipo E
    //const comprarTv32 = !!(trabalho1 ^ trabalho2)// !! operador bitwise (xor) que opera bit a bit 
    const comprarTV32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete // este é um operador unário
    return { comprarTv50, comprarTV32, comprarSorvete, manterSaudavel } //criação de um objeto com return
}
console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
