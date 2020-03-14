

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

function mostrarRedes() {
    let div = document.getElementById("redes");
    div.style.display = "block";
}

function show_checked() {
    var arrCB = {};

    $("input[name='redes']:checked").each(
        function () {
            var id = this.id;
            arrCB[id] = (this.checked ? 1 : 0)
        }
    );

    var text = JSON.stringify(arrCB);
    alert(text);
}

var form = document.getElementById("formulario");

form.addEventListener("submit", async function (event) {
    event.preventDefault();
    var rawData = new FormData(form);
    var data = {};
    for (let pair of rawData.entries()) {
        data[pair[0]] = pair[1];
    }
    let jsonData = JSON.stringify(data);
    console.log(jsonData);

   /* const rawResponse = await fetch("http://localhost:8080/", {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: jsonData
    });
    const content = await rawResponse.json();

    console.log(content);*/
}, false);



let usuario = {
    nome: document.getElementById('nome').value,
    telefone: document.getElementById('telefone').value,
    comoNosConheceu: document.getElementById('meios').value
}