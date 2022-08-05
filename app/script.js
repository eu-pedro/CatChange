let fotosGatos = ['https://api.thecatapi.com/v1/images/search?limit=10']

let principal = document.querySelector('.principal')
let conteudo = document.querySelector('.conteudo')
let figurePrincipal = document.querySelector('.figurePrincipal')

try {
  for(elementos of fotosGatos){
    console.log(elementos)
  }


} catch (error) {
  console.log(error)
}

