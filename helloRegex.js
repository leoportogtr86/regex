const texto = 'O cadastro das chaves do Pix já foi liberado, embora as transações com o novo sistema de pagamentos do Banco Central só estarem disponíveis a partir de 16 de novembro de 2020. Contudo, mesmo nesse primeiro momento, é preciso estar atento às fraudes e roubo de dados que aproveitam da novidade. Saiba como cadastrar as chaves do Pix com segurança.'


const regex = /Pix/

console.log(texto.match(regex))