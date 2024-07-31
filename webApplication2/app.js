function mostrarUsuario() {

    let form = prompt("Por favor ingresa tu nombre:");
    let usuario = form;

    document.write("Bienvenid@" + " " + usuario.toUpperCase());
}

mostrarUsuario();

function cambiarColorFondo() {

    let color = document.getElementById("seleccionColor").value;
    document.body.style.backgroundColor = color;

}

function cambiarFuente() {

    let fuente = document.getElementById("seleccionFuente").value;
    document.body.style.fontFamily = fuente;

}

function cambiarColorFuente() {
    
    let colorFuente = document.getElementById("seleccionColorFuente").value;
    document.body.style.color = colorFuente;

}

function cambiarTipoFuente() {

    let tipo = document.getElementById("seleccionTipoFuente").value;
    document.body.style.fontWeight = tipo;

}

let i = 0
let imagenes = [
        'background1.jpg',
        'background2.jpg',
        'background4.jpg',
        'background6.jpg',
        'background7.jpg'
    ];

function cambiarImagen() {


    i = (i + 1) % imagenes.length;

    let nuevaImagen = imagenes[i];
    document.getElementById("varImagen").src = nuevaImagen;

}

let posicion = 0;

function cambiarDiv() {

    let div = document.getElementById("cambiarDiv");

    if (posicion === 0) {

        div.style.transform = 'translateX(200px)';
        posicion = 1

    } else {

        div.style.transform = 'translateX(0)';
        posicion = 0

    }

}