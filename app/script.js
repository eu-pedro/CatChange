


let principalImagem = document.querySelector('#principalImg')
let btn = document.querySelector('#btn')

// criando evento de click para o botão Trocar Imagem
btn.addEventListener('click',mudarImagem)



async function mudarImagem(){

  const url = 'https://api.thecatapi.com/v1/images/search?limit=10'


  let x = 0
  try {
    
    const resultado = await axios.get(url)
    const dados = resultado
    console.log(dados.data[0].url)

    // criando os elementos dinamicamente
    principalImagem.src = `${dados.data[x].url}`
    
    
  
  } catch (error) {
    console.log(error)
  }

}




