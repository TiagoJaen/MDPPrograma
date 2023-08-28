const prompt = require("prompt-sync")(({sigint:true}))

let ejercicio = prompt("Seleccione su ejercicio:1-Número mayor y menor. 2-Tabla de multiplicar. 3-Tabla de dividir")

if (ejercicio == 1) {
    console.log(`Ha seleccionado el ejercicio"Número mayor y número menor"`)
    let p1 = prompt("Ingrese el primer digito")
    let p2 = prompt("Ingrese el segundo digito")
    let p3 = prompt("Ingrese el tercer digito")

    function operacion1(p1,p2,p3) {
        let mayor, menor;
        mayor = Math.max(p1,p2,p3)
        menor = Math.min(p1,p2,p3)
        return(mayor, menor)
    }
    const resultado = operacion1(p1,p2,p3)
    console.log("El número mayor es: " + operacion1.mayor)
    console.log("El número menor es: " + operacion1.menor)
}