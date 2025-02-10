// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];

function agregarAmigo(){
    let input= document.getElementById("amigo");
    let nombre = input.value.trim();

    if (nombre != ""){
        amigos.push(nombre);
        actualizarLista();
        input.value = "";

       
    } else{
         alert("Por favor, inserte un nombre");
        return;
    }
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for(let i = 0; i < amigos.length; i++){
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);

    }

}

function sortearAmigo(){
    if(amigos.length != 0){
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indiceAleatorio];
        let resultado = document.getElementById("resultado");
        resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    }else{
        alert("No hay amigos para sortear");
        return;
    }
}