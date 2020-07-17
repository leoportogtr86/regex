let texto = '0, 1, 2, 3, 4, 5, 6, 7, 8, 9, a, b, c, d ,e ,f'

let reg = new RegExp('a, b')

//verificando se o padrão se encontra na string

console.log(reg.test(texto))