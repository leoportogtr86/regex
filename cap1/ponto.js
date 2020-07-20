let frase = 'O rato roeu a roupa do rei de Roma.'
let cifra = `F7M                                       G7(13)
Olha que coisa mais linda mais cheia de graça
                            Gm7
É ela menina que vem e que passa
            C7(9-)                Am7(11)   Ab7(11+)    Gm7(11)   Gb7(11+)
Num doce balanço a caminho do mar

 F7M                                G7(13)
Moça do corpo dourado do sol de lpanema
                                Gm7
O seu balançado é mais que um poema
                C7(9-)                F7M
É a coisa mais linda que eu já vi passar

F#7M                     B7(9)
Ah, por que estou tão sozinho?
F#m7                          D7(9)
     Ah, por que tudo é tão triste?
Gm7                     Eb7(9)
     Ah, a beleza que existe
     Am7               D7(9-)
A beleza que não é só minha
 Gm7                C7(9-)
Que também passa sozinha

F7M                                 G7(13)
Ah, se ela soubesse que quando ela passa
                               Gm7
O mundo inteirinho se enche de graça
             C7(9-)              F7M
E fica mais lindo por causa do amor
C7(9-)            F7M
   Por causa do amor
C7(9-)            F7M
   Por causa do amor.
`

let regex = /..7.9-./gi

console.log(cifra.match(regex))