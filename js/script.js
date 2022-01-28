const btnCript = document.querySelector('.criptografar')
const btnDescript = document.querySelector('.descriptografar')
const btnCopiar = document.querySelector('.copiar')
const conteudoPrincipal = document.querySelector('#texto-principal')
const resposta = document.querySelector('#texto-resposta')


function ativarCriptografia() {

  btnCript.addEventListener('click', () => {
    const listaConteudo = detectarCaracteres()
    const resultado = criptografar(listaConteudo)
    imprimirResultado(resultado)

  })
} 

function ativarDescriptografia() {
  btnDescript.addEventListener('click', () => {
    const listaConteudo = detectarCaracteres()
    const resultado = descriptografar(listaConteudo)
    imprimirResultado(resultado)
  })
}


function detectarCaracteres() {
  const conteudo = conteudoPrincipal.value
  const novoValor = conteudo.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase()


  if (novoValor === '') {
    alert('Por favor digite alguma coisa!')
  } else {
    const listaConteudo = novoValor.split(' ')
    removerSobreMensagem()

    return listaConteudo
  }
}

function removerSobreMensagem() {
  const sobreMensagem = document.querySelector('#sobre-mensagem')
  sobreMensagem.classList.add('remover')
  btnCopiar.classList.add('adicionar')
}

function criptografar(lista) {

  const novaLista = lista.map(e => {
    const eLista = e.split('')

    const novo = eLista.map((e) => {
      if (e === 'a') {
        const a = e.replace(e, 'ai')
        return a
      } else if(e === 'e') {
        const a = e.replace(e, 'enter')
        return a
        
      } else if(e === 'i') {
        const a = e.replace(e, 'imes')
        return a
        
      } else if(e === 'o') {
        const a = e.replace(e, 'ober')
        return a
        
      } else if(e === 'u') {
        const a = e.replace(e, 'ufat')
        return a
        
      } else {
        return e
      }         
    })
    const resultado = novo.join('')
    return resultado
  })
  return novaLista
}

function descriptografar(lista) {
  const novo = lista.map(e => {
      let a = e.replaceAll('ai', 'a').replaceAll('enter', 'e').replaceAll('imes', 'i').replaceAll('ober', 'o').replaceAll('ufat', 'u')
      return a
  })
  return novo
}

function imprimirResultado(resultado) {
  const texto = resultado.join(' ')
  resposta.value = texto
}


btnCopiar.addEventListener('click',() => {
  const conteudo = resposta.value
  console.log(conteudo);
  navigator.clipboard.writeText(conteudo)
})

ativarCriptografia()
ativarDescriptografia()


