const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,.ABCDEFRTYTGHJK'

const regex = /,/gi

console.log(texto.match(regex))

console.log(texto.match(/0,1,2/gi))

let resultado = texto.match(/c,d,e,f,/gi)

console.log(resultado)



if (texto.match(/c,d,e,f,/gi)){

    console.log('Trecho de texto encontrado')

} else {

    console.log('Trecho de texto não encontrado')
}





if (texto.match(/leo/gi)) {

    console.log('Trecho de texto encontrado')

} else {

    console.log('Trecho de texto não encontrado')
}

console.log(texto.match(/abc/gi))