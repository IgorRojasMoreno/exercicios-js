const escola = "Cod3r"
console.log(escola.charAt(4))//charAt - faz a leitura da letra ou número na posição do númeral
console.log(escola.charAt(5))// não vai mostrar nada pois não existe a letra na posição 5
console.log(escola.charCodeAt(3))// vai buscar o valor dele na tabela ask ou tabela unicode que seria 51
console.log(escola.indexOf('3'))// vai mostra a letra ou número correspondente a 3 posição da palavra
console.log(escola.substring(1))// vai mostra as letras ou números a partir da posição 1 no caso (od3r)
console.log(escola.substring(0 , 3))// vai do indice 0 até o 3 sem incluir o indice 3.

console.log("Escola ".concat(escola).concat("!"))// concatenando uma string com uma variavel e com outra string
console.log("Escola " + escola + "!")// outra forma mais simples de concatenar string com variável

console.log(escola.replace(3, "e"))//substitui o valor 3 pela letra é na variavel.

console.log("Ana,Maria,Pedro".split(","))// separa a string 
