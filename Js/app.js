let carrito = [];

document.addEventListener("DOMContentLoaded", () => {
  const productosLocal = JSON.parse(localStorage.getItem("carrito"));
  if (productosLocal != null) {
    carrito = productosLocal;
  }
  mostrarCarrito();
});

const productos = [
  new Producto(1, "RemeraAdidas", 100, 1, "Adidas", 1, "Blanca"),
  new Producto(2, "RemeraNike", 200, 2, "Nike", 1, "Blanca"),
  new Producto(3, "RemeraUnder", 300, 1, "Under", 1, "Negra"),
  new Producto(4, "RemeraZara", 400, 1, "Zara", 1, "Blanca"),
  new Producto(5, "RemeraGucci", 200, 1, "Nike", 1, "Negra"),
  new Producto(6, "ChombaAdidas", 500, 1, "Adidas", 1, "Negra"),
  new Producto(7, "ChombaNike", 500, 1, "Nike", 1, "Blanca"),
  new Producto(8, "ChombaUnder", 500, 2, "Under", 1, "Azul"),
  new Producto(9, "ChombaZara", 500, 1, "Zara", 1, "Amarilla"),
  new Producto(10, "ChombaGucci", 500, 1, "Gucci", 1, "Vibora"),
  new Producto(11, "PantalonAdidas", 400, 1, "Adidas", 42, "Negro"),
  new Producto(12, "PantalonNike", 450, 1, "Nike", 40, "Gris"),
  new Producto(13, "PantalonUnder", 400, 1, "Under", 42, "Negro"),
  new Producto(14, "PantalonZara", 500, 1, "Zara", 44, "Azul"),
  new Producto(15, "PantalonGucci", 560, 1, "Gucci", 44, "Azul"),
  new Producto(16, "ZapatillasAdidas", 900, 1, "Adidas", 44, "Fuxia"),
  new Producto(17, "ZapatillasNike", 900, 1, "Nike", 43, "Verdes"),
  new Producto(18, "ZapatillasUnder", 950, 1, "Under", 42, "Negra"),
  new Producto(19, "ZapatillasZara", 1000, 1, "Zara", 41, "Verde Oscuro"),
  new Producto(20, "ZapatillasGucci", 1100, 1, "Gucci", 39, "Blanca"),
];

const boton1 = document.getElementById("boton1");
const boton2 = document.getElementById("boton2");
const boton3 = document.getElementById("boton3");
const boton4 = document.getElementById("boton4");
const boton5 = document.getElementById("boton5");
const boton6 = document.getElementById("boton6");
const boton7 = document.getElementById("boton7");
const boton8 = document.getElementById("boton8");
const boton9 = document.getElementById("boton9");
const boton10 = document.getElementById("boton10");
const boton11 = document.getElementById("boton11");
const boton12 = document.getElementById("boton12");
const boton13 = document.getElementById("boton13");
const boton14 = document.getElementById("boton14");
const boton15 = document.getElementById("boton15");
const boton16 = document.getElementById("boton16");
const boton17 = document.getElementById("boton17");
const boton18 = document.getElementById("boton18");
const boton19 = document.getElementById("boton19");
const boton20 = document.getElementById("boton20");

document.getElementById('vaciar-carrito').addEventListener('click', function() {
  Swal.fire({
    title: '¿Estás seguro?',
    text: '¿Quieres vaciar el carrito?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, vaciar carrito',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      carrito = [];
      localStorage.clear();
      mostrarCarrito();
      Swal.fire(
        'Carrito vaciado',
        'El carrito ha sido vaciado completamente',
        'success'
      )
    }
  })
});

document.getElementById('boton-terminar').addEventListener('click', function() {
  Swal.fire({
    title: '¿Terminar compra?',
    text: '¿Estás seguro que desea terminar la compra?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sí, deseo finalizar la compra',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if (result.isConfirmed) {
      carrito = [];
      mostrarCarrito();
      Swal.fire(
        'Compra terminada',
        'Gracias por comprar en Indumentaria Online',
        'success'
      )
    }
  })
});

boton1.addEventListener("click", () => {
  const producto = productos.find((item) => {
    return item.id === +boton1.dataset.id;
  });
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
});

boton2.addEventListener("click", () => {
  const producto = productos.find((item) => {
    return item.id === +boton2.dataset.id;
  });
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
});

boton3.addEventListener("click", () => {
  const producto = productos.find((item) => {
    return item.id === +boton3.dataset.id;
  });
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
});
boton4.addEventListener("click", () => {
  const producto = productos.find((item) => {
    return item.id === +boton4.dataset.id;
  });
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
});
boton5.addEventListener("click", () => {
  const producto = productos.find((item) => {
    return item.id === +boton5.dataset.id;
  });
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
});
boton6.addEventListener("click", () => {
  const producto = productos.find((item) => {
    return item.id === +boton6.dataset.id;
  });
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
});
boton7.addEventListener("click", () => {
  const producto = productos.find((item) => {
    return item.id === +boton7.dataset.id;
  });
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
});
boton8.addEventListener("click", () => {
  const producto = productos.find((item) => {
    return item.id === +boton8.dataset.id;
  });
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
});
boton9.addEventListener("click", () => {
  const producto = productos.find((item) => {
    return item.id === +boton9.dataset.id;
  });
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
});
boton10.addEventListener("click", () => {
  const producto = productos.find((item) => {
    return item.id === +boton10.dataset.id;
  });
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
});
boton11.addEventListener("click", () => {
  const producto = productos.find((item) => {
    return item.id === +boton11.dataset.id;
  });
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
});
boton12.addEventListener("click", () => {
  const producto = productos.find((item) => {
    return item.id === +boton12.dataset.id;
  });
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
});
boton13.addEventListener("click", () => {
  const producto = productos.find((item) => {
    return item.id === +boton13.dataset.id;
  });
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
});
boton14.addEventListener("click", () => {
  const producto = productos.find((item) => {
    return item.id === +boton14.dataset.id;
  });
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
});
boton15.addEventListener("click", () => {
  const producto = productos.find((item) => {
    return item.id === +boton15.dataset.id;
  });
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
});
boton16.addEventListener("click", () => {
  const producto = productos.find((item) => {
    return item.id === +boton16.dataset.id;
  });
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
});
boton17.addEventListener("click", () => {
  const producto = productos.find((item) => {
    return item.id === +boton17.dataset.id;
  });
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
});
boton18.addEventListener("click", () => {
  const producto = productos.find((item) => {
    return item.id === +boton18.dataset.id;
  });
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
});
boton19.addEventListener("click", () => {
  const producto = productos.find((item) => {
    return item.id === +boton19.dataset.id;
  });
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
});
boton20.addEventListener("click", () => {
  const producto = productos.find((item) => {
    return item.id === +boton20.dataset.id;
  });
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  mostrarCarrito();
});

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

mostrarCarrito();
