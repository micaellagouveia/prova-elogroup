function validar() {
    let form = document.forms['formulario'];

    let nome = form['nome'].value;

    if (nome.split(' ').length < 2) {
        alert('Inserir nome e sobrenome');
    }

    let telefone = form['telefone'].value;

    let formatoTelefone = /^([0-9]{2}) ?- ?([0-9]{8})[0-9]?/;

    if (!telefone.match(formatoTelefone)) {
        alert('Telefone inválido. Formato: 00-00000000');
    }

}

function esconderRedes() {
    let div = document.getElementById("redes");
    div.style.display = "none";
}

function mostrarRedes(){
    let div = document.getElementById("redes");
    div.style.display = "block";
}

let usuario = {
    nome: document.getElementById('nome').value,
    telefone: document.getElementById('telefone').value,
    como nos conheceu: document.getElementById('meios').value
}