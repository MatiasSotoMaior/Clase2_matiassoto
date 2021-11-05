//pedir nombre en prompt
let nombreIngresado = prompt("Hola, cual es tu nombre?");
//crear mensaje a mostrar
let mensaje_a_mostrar = alert("Hola " + nombreIngresado);
//mostrar el mensaje
let pregunta1 = prompt("Contame " + nombreIngresado + ", tenes novio/a?")
if (pregunta1 == "si") {
    let pregunta2 = prompt("que suerte la tuya!, como es su nombre?");
    alert("que lindo nombre!")
} else if (pregunta1 == "no") {
    alert("Ya va a llegar!")
} else {
    alert("me parece que no contestate mi pregunta :(" + nombreIngresado)
}