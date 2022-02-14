/* 
1- Javascript é caseSensitive
2- Temos 3 jeitos de declarar variaveis
  var nome = 'thiago' //variavel de escopo global
  let nome = 'thiago' //variavel de escopo fechado
  const nome = 'thiago' //escopo fechado e não deve ser alterada
3- Document Selector => document.
    por Tag: getElementByTagName(h1)
    por Id: getElementById('contato')
    por Nome: getElementsByName('nome')
    por Classe: getElementsByClassName('texto')
    por Seletor: querySelector('.classe')
    por Seletor: querySelectorAll('.classe')
*/

let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let nomeOk = false;
let emailOk = false;
let assuntoOk = false;
let mapa = document.querySelector('#mapa')

let contador = document.querySelector('#contador')
contador.innerHTML = "0 / 100"


function valorNome() {
let txtNome = document.querySelector('#txtNome');

if (nome.value.length >= 4) {
    txtNome.style.color = '#26733a';
    txtNome.innerHTML = 'Nome válido ✔';
    nomeOk = true;
} else {
    txtNome.style.color = '#732626';
    txtNome.innerHTML = 'Nome inválido - Insira pelo menos 4 caracteres ❌';
}
}

// function validaEmail() {
//   let txtEmail = document.querySelector('#txtEmail');

//   if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
//     txtEmail.innerHTML = 'E-mail inválido - preciso de um @ e de um . ❌';
//     txtEmail.style.color = '#732626';
//   } else {
//     txtEmail.innerHTML = 'E-mail válido ✔';
//     txtEmail.style.color = '#26733a';
//     emailOk = true;
//   }
// }

function validaEmail(){
let txtEmail = document.querySelector('#txtEmail')

if (email.value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
    txtEmail.innerHTML = 'Email Valido'
} else {
    txtEmail.innerHTML = 'Email Invalido'
}
}

function validaAssunto() {
let txtAssunto = document.querySelector('#txtAssunto');

    contador.innerHTML = `${assunto.value.length} / 100`


if (assunto.value.length >= 100) {
    txtAssunto.innerHTML =
    'Texto é muito grande, digite no máximo 100 caracteres ❌';
    txtAssunto.style.color = '#732626';
    txtAssunto.style.display = 'block';
} else {
    txtAssunto.style.display = 'none';
    assuntoOk = true;
}
}



function enviar() {
if (nomeOk == true && emailOk == true && assuntoOk == true) {
    alert('Formulário enviado com sucesso!');
} else {
    alert('Preencha o formulário corretamente antes de enviar...');
}
}

function count(){
let contador = document.querySelector('#contador')
contador.innerHTML = `${assunto.value.length} / 144`
}

function mapaZoom() {
mapa.style.width = '40vw'
mapa.style.height = '50vh'
mapa.style.zIndex = '15'
}

function mapaNormal() {
mapa.style.width = '40vw'
mapa.style.height = '40vh'
}

function subirTela() {
window.scrollTo(0,0)
}


// regex de email    /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/