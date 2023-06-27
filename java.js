var Carrito = {
  productos: [],
  valorTotal: 0,
}

function sumaProductos(ValorItem, Producto) {
  var productoEncontrado = Carrito.productos.find((p) => p.nombre === Producto);

  if (productoEncontrado) {
    productoEncontrado.cantidad += 1;
  } else {
    Carrito.productos.push({ nombre: Producto, cantidad: 1, precio: ValorItem });
  }

  Carrito.valorTotal += ValorItem;
  actualizarCarritoUI();
}

function Limpiar() {
  Carrito.valorTotal = 0;
  Carrito.productos = [];
  document.getElementById("elTotal").innerHTML = "TOTAL: " + "$" ;
  actualizarCarritoUI();
}

function actualizarCarritoUI() {
  var listaProductosDiv = document.getElementById('listaProductos');
  listaProductosDiv.innerHTML = '';

  Carrito.productos.forEach((producto) => {
      var productoDiv = document.createElement('div');
      productoDiv.innerHTML = `
          <h5>${producto.nombre}</h5>
          <p>Cantidad: ${producto.cantidad}</p>
          <p>Subtotal: ${producto.cantidad * producto.precio}</p>
      `;
      listaProductosDiv.appendChild(productoDiv);
  });

  document.getElementById('elTotal').innerText = `Monto total: ${Carrito.valorTotal} Pesos`;
}
