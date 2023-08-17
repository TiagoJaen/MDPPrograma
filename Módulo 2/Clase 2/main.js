const prompt = require("prompt-sync")(({sigint:true}))
var nombre = prompt("¿Cual es tu nombre?");
var edad = prompt("¿Cual es tu edad?");

console.log("Nombre: " + nombre + ". Edad: " + edad + ".")