// Definimos un objeto Carrito que contiene la lista de productos y su valor total
// Definimos un objeto Carrito que contiene la lista de productos y su valor total
var Carrito = {
  productos: [],
  valorTotal: 0,
}

// Función para sumar productos
function sumaProductos(ValorItem, Producto) {
  // Buscamos si el producto ya está en el carrito
  var productoEncontrado = Carrito.productos.find((p) => p.nombre === Producto);

  // Si el producto ya está en el carrito, incrementamos su cantidad
  if (productoEncontrado) {
      productoEncontrado.cantidad += 1;
  } else {
      // Si el producto no está en el carrito, lo añadimos con cantidad 1
      Carrito.productos.push({ nombre: Producto, cantidad: 1, precio: ValorItem });
  }

  // Sumamos el valor del producto al valor total del carrito
  Carrito.valorTotal += ValorItem;

  // Actualiza la interfaz del carrito
  actualizarCarritoUI();
}

function actualizarCarritoUI() {
  // Obtén el div donde se mostrarán los productos
  var listaProductosDiv = document.getElementById('listaProductos');

  // Limpia el div
  listaProductosDiv.innerHTML = '';

  // Para cada producto en el carrito, añade un nuevo div con la información del producto
  Carrito.productos.forEach((producto) => {
      var productoDiv = document.createElement('div');
      productoDiv.innerHTML = `
          <h5>${producto.nombre}</h5>
          <p>Cantidad: ${producto.cantidad}</p>
          <p>Subtotal: ${producto.cantidad * producto.precio}</p>
      `;
      listaProductosDiv.appendChild(productoDiv);
  });

  // Actualiza el total del carrito
  document.getElementById('elTotal').innerText = `Monto total: ${Carrito.valorTotal} Pesos`;
}



  

function Limpiar() {
  Carrito.valorTotal=0
    document.getElementById("elTotal").innerHTML = "TOTAL: " + "$" ; }

    function actualizarCarritoUI() {
        var carritoElemento = document.getElementById("elTotal");
      
        // Actualiza el monto total del carrito
        carritoElemento.innerHTML = "Monto total: " + Carrito.valorTotal;
      
        // Aquí puedes agregar código para listar los productos en el carrito si lo deseas
      }
      