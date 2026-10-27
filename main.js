
let alunos = ["Daniel Fonseca"];

const formulario = document.getElementById("formulario");
const campoNome = document.getElementById("nome");
const lista = document.getElementById("lista");

function mostrarNomes() {
    lista.innerHTML = "";

    alunos.forEach(function(nome) {
        let item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
    });
}

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    let novoNome = campoNome.value.trim();

    if (novoNome !== "") {
        alunos.push(novoNome);
        mostrarNomes();
        campoNome.value = "";
    }
});

mostrarNomes();
