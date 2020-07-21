const frase = 'The book is on the table. 1, 2, 3, 4, 5, 6, 7, 8, 9, 0.'

//busca letras de "a" a "z", maiusculas e minusculas
console.log(frase.match(/[a-zA-Z]/g))

//busca por numeros

console.log(frase.match(/[0-9]/g))


//numeros
console.log(frase.match(/\d/g))

//numeros e letras
console.log(frase.match(/\w/g))


