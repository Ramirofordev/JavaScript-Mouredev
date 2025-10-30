// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "Jose"
if (myName == "Jose"){
    console.log(myName)
}

// 2. Imprime por ocnsola un mensaje si el usuario y contraseña coincide con unos establecidos
let user = "Kuro"
let password = "123"
if (user == "Kuro" && password == "123"){
    console.log("Puedes entrar")
} else{
    console.log("Usuario o contraseña incorrectos porfavor intente de nuevo.")
}

// 3. Verifica si un numero es positivo, negativo o cero e imprime un mensaje
let num = 1
if (num > 0) {
    console.log("El numero es positivo")
} else if (num < 0) {
    console.log("El numero es negativo")
} else {
    console.log("El numero es 0")
}

// 4. Verifica si una persona puede votar o no (mayor o igual que 18) e indica cuantos años le faltan
let age = 16
if (age >= 18) {
    console.log("Puedes votar!")
} else {
    console.log(`Te faltan ${18 - age} años para votar`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable dependiendo de la edad
age = 25
let etapa
if (age >= 18) {
    etapa = "Adulto"
} else {
    etapa = "Menor"
}

// 6. Muestra en que estacion del año nos encontramos dependiendo del valor de una variable "mes"
let mes = "Diciembre"
if (mes == "Enero" || "Diciembre" || "Febrero") {
    console.log("Estamos en invierno!")
} else if (mes == "Septiembre" || "Octubre" || "Noviembre") {
    console.log("Estamos en otoño!")
} else if (mes == "Marzo" || "Abril" || "Mayo") {
    console.log("Estamos en primavera!")
} else if (mes == "Junio" || "Julio" || "Agosto") {
    console.log("Estamos en verano!")
}

// 7. Muestra el numero de dias que tiene un mes dependiendo de la variable del ejercico anterior
if (mes == "Enero" || "Marzo" || "Mayo" || "Julio" || "Agosto" || "Octubre" || "Diciembre") {
    console.log("El mes tiene 31 dias!")
} else if (mes == "Abril" || "Junio" || "Septiembre" || "Noviembre") {
    console.log("El mes tiene 30 dias")
} else {
    console.log("El mes tiene 28 dias y 29 si es año bisiesto")
}

// 8. Usa un swith para imprimir un mensaje de saludo diferente dependiendo del idioma
let idioma = "Español"

switch (idioma) {
    case "Español":
        console.log("Hola!")
        break
    case "English":
        console.log("Hello!")
        break
    case "Italiano":
        console.log("Ciao!")
        break
    case "Francais":
        console.log("Bonjour!")
        break
    default:
        console.log("Perdon no reconozco el idioma 🥲")
}

// 9. Usa un switch para hacer de nuevo el ejercicio 6

mes = 12
switch (mes) {
    case 3:
    case 4:
    case 5:
        console.log("Primavera")
        break
    case 6:
    case 7:
    case 8:
        console.log("Verano")
        break
    case 9:
    case 10:
    case 11:
        console.log("Otoño")
    default:
        console.log("Invierno")
}

// 10. Usa un switch para hacer de nuevo el ejercicio 7
mes = 2
switch (mes) {
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("Este mes tiene 31 dias")
    case 1:
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("Este mes tiene 30 dias")
    default:
        console.log("Este mes tiene 28/29 dias")
}