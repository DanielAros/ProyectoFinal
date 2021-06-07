let productos=[[0,"Coca",12],
               [1,"Papas",10],
               [2,"Chocolates",5],
               [3,"Panditas",7],
               [4,"Chicles",2]];

window.addEventListener("load",cargar);
function cargar(){
    for(i=0;i<productos.length;i++){
        document.querySelector('section').innerHTML+="<div id='"+productos[i][0]+"'>"+
                                                    "<h1>"+productos[i][1]+"</h1>"+
                                                    "<p>"+"$"+productos[i][2]+"</p>"+
                                                    "<button onclick='agregar("+productos[i][0]+")'>+</button>"+
                                                    "</div>";
    }
}

let carrito=[];
function agregar(id){
    carrito.push(id);
    document.querySelector('s').innerHTML=carrito.length;
    productosComprados();
}

let barraCarritoVisible = false;

function mostrarCarrito(){
    document.querySelector('section').classList.add('acomodar');
    let barraCarrito = document.querySelector('nav');

    barraCarrito.innerHTML = "";

    if(barraCarritoVisible){
        barraCarrito.classList.add('ocultar');
        barraCarrito.classList.remove('visible');
        barraCarritoVisible = false;
    }else{
        barraCarrito.classList.add('visible');
        barraCarrito.classList.remove('ocultar');
        barraCarritoVisible = true;
    }

    productosComprados();
}
function productosComprados(){
    let barraCarrito = document.querySelector('nav');
    let totalCompra = 0;
    barraCarrito.innerHTML = "";

    let listaProductos=[];
    for(i=0;i<carrito.length;i++){
        for(j=0;j<productos.length;j++){
            if(productos[j][0]==carrito[i]){
                listaProductos.push(productos[j][1]+" $"+productos[j][2]);
                totalCompra += productos[j][2];
            }    
        }
    }

    barraCarrito.innerHTML += "<h3>Carrito</h3>"
    for(i = 0; i < listaProductos.length; i++){
        barraCarrito.innerHTML += "<p>"+listaProductos[i]+"\n";
    }
    
    barraCarrito.innerHTML += "<h3>Total Compra:" + "<h4>"+"$"+totalCompra+"</h4>"+"</h3>"
}