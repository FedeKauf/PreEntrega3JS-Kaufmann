let carrito = [];

//Carga todo el documento
document.addEventListener("DOMContentLoaded", async () => {
  const productosLocal = JSON.parse(localStorage.getItem("carrito"));
  if (productosLocal != null) {
    carrito = productosLocal;
  }

  cargarProductos();
});

//Recupera productos del Local Storage
function recuperarCarrito() {
  const productosLocal = JSON.parse(localStorage.getItem("carrito"));
  carrito = productosLocal ?? []; // si productosLocal es null devuelve []
  mostrarCarrito();
}

//Carga y espera a que todos los productos.json estén, para comenzar luego a agregar productos
async function cargarProductos() {
  const resp = await fetch("./Productos.json");
  const productos = await resp.json();
  const contenedorCategoria = document.getElementById("contenedor-categoria");
  const contenedorCards = document.createElement("div");
  contenedorCards.classList.add("card-content");

  contenedorCategoria.appendChild(contenedorCards);

  productos.forEach((producto, indx) => {
    const botonX = `boton${indx}`;
    contenedorCards.innerHTML += `<div class="card">
    <img src=${producto.img} alt="Card image" />
    <div class="card-content">
    <h3>${producto.nombre}</h3>
    <p>Card numero ${indx + 1}</p>
    <button id="${botonX}" class="button">
    Agregar al carrito
    </button>
    </div>
    </div>`;
  });

  //Para cada card y su boton, agrega un escuchador
  productos.forEach((producto, indx) => {
    const boton = document.getElementById(`boton${indx}`);
    boton.addEventListener("click", () => agregarAlCarrito(producto));
  });
}

//Luego de escuchar el click "agregarAlCarrito" correspondiente a una card, lo agrega al carrito y activa funcion Toastify (ver linea 109: function "activarToastifyProducto")
function agregarAlCarrito(producto) {
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
  activarToastifyProducto(producto);
}

//Escuchador y acción de "vaciar carrito" mediante sweetalert2
document
  .getElementById("vaciar-carrito")
  .addEventListener("click", function () {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Quieres vaciar el carrito?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, vaciar carrito",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        carrito = [];
        localStorage.clear();
        mostrarCarrito();
        Swal.fire(
          "Carrito vaciado",
          "El carrito ha sido vaciado completamente",
          "success"
        );
      }
    });
  });

//Escuchador y acción de "boton-terminar" mediante sweetalert2
document
  .getElementById("boton-terminar")
  .addEventListener("click", function () {
    Swal.fire({
      title: "¿Terminar compra?",
      text: "¿Estás seguro que desea terminar la compra?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, deseo finalizar la compra",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        carrito = [];
        mostrarCarrito();
        Swal.fire(
          "Compra guardada!",
          "Su compra fue guardada, si desea recuperarla presionar en botón 'Recuperar' y continúe!",
          "success"
        );
      }
    });
  });

//Muestra qué producto específicamente fue agregado mediante un Toast y la siguente configuración
function activarToastifyProducto(producto) {
  const Remera = {
    text: `¡Agregaste una ${producto.nombre} al carrito!`,
    duration: 5000,
    newWindow: true,
    close: true,
    gravity: "top",
    position: "right",
    backgroundColor: "linear-gradient(to right, #00b09b, #96c93d)",
    stopOnFocus: true,
  };
  Toastify(Remera).showToast();
}
//Muestra la tabla donde se van a ir cargando uno debajo de otro los productos agregados por el usuario del carrito
function mostrarCarrito() {
  const tabla = document.getElementById("producto");
  tabla.innerHTML = ``;
  let counter = 1;

  carrito.forEach((producto) => {
    tabla.innerHTML += `
      <tr>
        <th>${counter}<th>
        <td>${producto.nombre}<td>
        <td>${producto.marca}<td>
        <td>${producto.talle}<td>
        <td>${producto.color}<td>
        <td>${producto.cantidad}<td>
        <td>${producto.precio}<td>
      <tr>
    `;
    counter++;
  });
  tr = document.createElement("tr");
  tr.innerHTML = `<th><th>
                    <td><td>
                    <td><td>
                    <td><td>
                    <td><td>
                    <td><td>
                    <td><td>
                    <td>${carrito.reduce(
                      (total, item) => total + item.precio,
                      0
                    )}<td>
                    `;
  tabla.appendChild(tr);
}
