//capturar valores 
let producto, cantidad, precio,total= 0;
let pagarBtn = document.getElementById("button");
const productos = document.getElementsByClassName("contenedor-productos");
let carrito = [];
let masVendido = []



function cobro(){
    let precioActual,mayor;
    let aux1, aux2=0;

    producto = document.getElementById("nombre").value;
    cantidad = document.getElementById("cantidad").value;
    precio = document.getElementById("precio").value;

    parseInt(cantidad);
    parseFloat(precio);

    let productoActual = {
        "producto": `${producto}`,
        "cantidad": `${cantidad}`,
        "precio":  `${precio}`
    }
    
    carrito.push(productoActual);
    precioActual= parseFloat(productoActual.precio);
    total += precioActual;
 
    
    alert(`Total a pagar por ${productoActual.cantidad} de ${productoActual.producto}: ${productoActual.precio}`);
    alert(`Total a pagar ${total}`);

    if(masVendido.length==0){
        masVendido.push(productoActual);
    }
    if(masVendido.length!=0){
        for(let i=0; i<masVendido.length; i++){
            if(productoActual.producto.value!= masVendido[i].producto.value){
                masVendido.push(productoActual);
            }else{
               aux1= parseInt(masVendido[i].cantidad.value);
               aux2= aux1 + 1;
               masVendido[i].cantidad.value = aux2;
            }
        }
    }
    /*for(let i=0; i<masVendido.length; i++){
        if(masVendido[i].cantidad.value>masVendido[i+1].cantidad.value){
            mayor= masVendido[i].producto;
        }
    }*/
    /*hola profe, creo que me sobre complique y la funcion de sacar el mas vendido se me complico*/
    alert(`Producto mas vendido ${masVendido[0].producto}`);
    console.log(masVendido);
}
  

