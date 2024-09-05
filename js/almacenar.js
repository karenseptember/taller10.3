//Arreglo para almacenar items
let listaDeItems = JSON.parse(localStorage.getItem("listaDeItems")) || [];

//Actualizar la vista del listado
function actualizarVista() {
  const contenedor = document.getElementById("contenedor");
  contenedor.innerHTML = " ";

  //Recorrer arreglo y crear los elementos
  listaDeItems.forEach(function (item) {
    const li = document.createElement("li");
    li.textContent = item;
    contenedor.appendChild(li);
  });
}

//Función para agregar nuevo item
function agregarItem() {
  const inputItem = document.getElementById("item");
  const nuevoItem = inputItem.value.trim(); //Remover espacios en blanco

  //Validamos si el campo no está vacío
  if (nuevoItem) {
    listaDeItems.push(nuevoItem);
    localStorage.setItem("listaDeItems", JSON.stringify(listaDeItems)); //Guardar item en el LocalStorage
    actualizarVista();
    inputItem.value = ""; //limpiar campo de texto del input
    inputItem.focus(); //mantiene el foco en el campo de entrada
  }
}

//Evento para agregar con el botón
document.getElementById("agregar").addEventListener("click", agregarItem);

//Evento para borrar con el botón
document.getElementById("limpiar").addEventListener("click", function () {
  listaDeItems = [];
  localStorage.removeItem("listaDeItems"); //Removerlo del LocalStorage
  actualizarVista();
});

// Funcion para cargar la lista al iniciar
document.addEventListener("DOMContentLoaded", actualizarVista);
