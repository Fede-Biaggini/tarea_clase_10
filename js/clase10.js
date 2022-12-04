
//EN LA CONSOLA

//let nombre = "Programación" + " Fácil,";
//let saludo = "Les doy la bienvenida a ";
//let agregado = " es muy entrenida, a medida que aprendes!";
//let fraseCompleta = saludo + nombre + agregado;
//console.log(fraseCompleta);

//let frase = "JavaScript " + "es un lenguaje" + " esencial para crear" + " sitios web poderosos.";
//console.log(frase);

//agregar texto con espacio entre numeros y texto
//let numeroString1 = "10";
//let textoA = " este es el texto "
//let numeroString2 = "20";
//let textoB = " este es el otro texto "
//let numeroString3 = "30";
//let concatenaNumerosYtextos = numeroString1 + textoA + numeroString2 + textoB + numeroString3;
//console.log(concatenaNumerosYtextos);

//let age = prompt("Cuál es tu edad?");
//console.log(age);

//let age = prompt("Cuál es tu edad?");
//let name = prompt("Cuál es tu nombre?");
//console.warm(age, name);

//MAYOR MENOR DE EDAD
//let edad;
//edad = prompt("Introduce tu edad");
//if (edad >= 18){
//alert("Puedes entrar, eres mayor de edad.");
//} else {
//alert("No puedes entrar, eres menor de edad.");
//}

let sexo;
let edad;
sexo = prompt("Indica tu sexo.");
edad = parseInt(prompt("Cual es tu edad?"));
if (sexo == "masculino" && edad >= 18){
    alert("Bienvenido!");
} else {
    alert ("No puede ingresar.");
} 
//else if (sexo == "femenino" && edad >= 20){
//    alert("Bienvenida!");
//}
//else {
//    alert("No puede ingresar.");
//}