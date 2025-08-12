let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();
    if (nombre ==="") {
        alert("Por favor, escribe un nombre 😉")
    }

    if (amigos.includes(nombre)) {
        //alert("El nombre ya está registrado 😅");
        alert(nombre + " ya está en la lista, ingresa otro nombre");
        return;
    }

    amigos.push(nombre);
    document.getElementById('amigo').value = "";
    mostrarLista();

}

function mostrarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpia la lista
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function sortearAmigo() {

    if (amigos.length === 0) {
        alert("No hay nombres en la lista 😅");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigoSecreto}</strong></li>`   ;
}