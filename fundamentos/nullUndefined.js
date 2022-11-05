let valor //não inicializa
console.log(valor)

valor = null //ausência de valor
console.log(valor)
//console.log(valor.toString()) //Erro!

const produto = {}
console.log(produto.preco)
console.log(produto)
produto.preco = 3.50

console.log(produto)

produto.preco = undefined //evite atribuir undefined
console.log(!!produto.preco)
console.log(produto)

delete produto.preco // é a forma correta de tirar um atributo de um objeto

produto.preco = null //este produto esta sem preço
console.log(!!produto.preco)
console.log(produto)