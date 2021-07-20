/*
Case sensitive = reconhece letras maiusculas e minusculas

por Id: getElementById()
por tag: getElementByTagName()
por Nome: getElementsByName()
por classe: getElementByClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById("nome")
let email = document.querySelector('#email')
letassunto = document.querySelector('#assunto')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
  let txtNome = document.querySelector('#txtNome')
  if (nome.value.length < 3) {
    txtNome.innerHTML = 'Nome Inválido!'
    txtNome.style.color = 'red'
  }
  else{
    txt.innerHTML = 'Nome Válido!'
    txt.style.color = 'green'
  }
 
}

function validaEmail() {
  let txtEmail = document.querySelector('#txtEmail')
  if(email.value.indexOf('@') == -1 ||email.value.indexOf('.') == -1 ) {
    txtEmail.innerHTML = 'E-mail inválido'
    txtEmail.style.color = 'red'
  }
  else{
    txtEmail.innerHTML = 'E-mail Válido!'
    txtEmail.style.color = 'green'
  }
}