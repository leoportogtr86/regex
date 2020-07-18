const texto = 'Brasil, alemanha, França, China e Japão.'

const regex = /tesla/gi //flag g para buscar ocorrencias no texto inteiro (global) e i para ignorar case

const post = `A Tesla anunciou um novo caminhão que além de lindo,
 possui tecnologias que vão te deixar de boca aberta! 
 Com potência de sobra que vão deixar muitos carros 
 esportivos para trás, ele é inteiramente elétrico e
  possui uma cabine que mais parece um avião!`

console.log(post.match(regex))