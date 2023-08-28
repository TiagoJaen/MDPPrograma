const prompt = require("prompt-sync")(({sigint:true}))

function operacion(x,y,z) {
    let result;
    if (x == 1) {
        result = y+z
    } 
    else if (x == 2) {
        result = y-z
    }
    else if (x == 3) {
        result = y*z
    }
    else if (x == 4) {
        result = y/z
    }
    return result;
};

let p1 = prompt("Ingrese el primer digito:");
let p2 = prompt("Ingrese el segundo digito:");
let op = prompt("¿Qué operación desea hacer? 1=Suma 2=Resta 3=Multiplicación 4=División:");
let acciones = ("El resultado de su operación es:" + operacion(op,p1,p2))
console.log(acciones);