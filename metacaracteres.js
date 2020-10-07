// . ? * + - ^ $ | ( ) { } [ ] \ :

const texto = '1,2,3,4,5,6,a.b c!d?e'


//como o . é um metacaractere, usamos a \ para indicar que 
//queremos usar o seu valor literal e nao sua funcao de metacaractere
const ponto = /\./g

console.log(texto.match(ponto))


//usando o ponto para splitar a string
console.log(texto.split(ponto))


//sempre que precisar usar o valor literal de
//um caractere que tem funcao de metacaractere,
//usamos contrabarra \
const simbolos = /,|\.|5|\?|\!/g

console.log(texto.match(simbolos))

console.log(texto.split(simbolos))