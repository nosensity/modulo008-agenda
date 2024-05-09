const form = document.getElementById('agenda-form');
const contatos = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    adicionaLinha();
    atualizaAgenda();
})

function adicionaLinha() {
const inputContatos = document.getElementById('contato');
const inputTelefone = document.getElementById('telefone'); 

if (contatos.includes(inputContatos.value)) {
    alert (`O contato ${inputContatos.value} já existe na agenda!`)
} else if (telefones.includes(inputTelefone.value)){
    alert (`O número de telefone ${inputTelefone.value} já existe na agenda!`)
} else {

    contatos.push(inputContatos.value);
    telefones.push(inputTelefone.value);

let linha = '<tr>';
linha += `<td>${inputContatos.value}</td>`;
linha += `<td>${inputTelefone.value}</td>`;
linha += '</tr>';

linhas += linha;

alert (`o contato: ${inputContatos.value} com o numero de telefone: ${inputTelefone.value} foi adicionado`)}
}


function atualizaAgenda () {
    const corpoAgenda = document.querySelector('tbody');
    corpoAgenda.innerHTML = linhas;
}