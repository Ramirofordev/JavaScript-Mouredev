// Strings

// Concatenacion

let myName = "Jose"
let greeting = "Hello, " + myName + "!"
console.log(greeting)
console.log(typeof greeting)

// Longitud
console.log(greeting.length)

// Acceso a caracteres
console.log(greeting[0])
console.log(greeting[11])

// Metodos comunes
console.log(greeting.toUpperCase())
console.log(greeting.toLowerCase())
console.log(greeting.indexOf("Jose"))
console.log(greeting.includes("Hello"))
console.log(greeting.slice(0, 10))
console.log(greeting.replace("Jose", "Kuro"))

// Templates literals (plantillas literales)

let message = `Hola, este es mi 
curso de JavaScript`

console.log(message)

let email = 'joseignacio22@gmail.com'

console.log(`Hola, ${myName}! Tu email es ${email}`)