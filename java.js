// Definimos un objeto Carrito que contiene la lista de productos y su valor total
var Carrito = {
    productos: [],
    valorTotal: 0,
}
  
// Función para sumar productos
function sumaProductos(ValorItem, Producto) {
    // Añadimos el producto al carrito
    Carrito.productos.push(Producto);
  
    // Sumamos el valor del producto al valor total del carrito
    Carrito.valorTotal += ValorItem;
  
    // Actualiza la interfaz del carrito
    actualizarCarritoUI();
  }
  

function Limpiar() {
  Carrito.valorTotal=0
    document.getElementById("elTotal").innerHTML = "TOTAL: " + "$" + 0; }

    function actualizarCarritoUI() {
        var carritoElemento = document.getElementById("elTotal");
      
        // Actualiza el monto total del carrito
        carritoElemento.innerHTML = "Monto total: " + Carrito.valorTotal;
      
        // Aquí puedes agregar código para listar los productos en el carrito si lo deseas
      }
      