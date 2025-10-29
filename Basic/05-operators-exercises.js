// 1. Crea una variable para cada operacion aritmetica

let sum = 5 + 2
let rest = 5 - 2
let mult = 5 * 2
let div = 5 / 2 
let mod = 5 % 2
let pow = 5 ** 2

// 2. Crea una variable para cada tipo de operacion de asignacion, que haga uso de las variable utilizadas para las operaciones aritmeticas

sum += 2 
rest -= 3
mult *= 4
div /= 2
mod %= 3
pow **= 4

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparacion

console.log(2 < 5)
console.log(2 != 3)
console.log(2 == 2)
console.log(3 > 2)
console.log(10 >= 5)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparacion

console.log(2 > 5)
console.log(2 == 3)
console.log(2 != 2)
console.log(3 < 2)
console.log(10 <= 5)

// 5. Utiliza el operador logico and

console.log(2 == 2 && 5 > 3)

// 6. Utiliza el operador logico or

console.log(2 < 1 || 10 > 3)

// 7. Combina ambos operadores logicos

console.log(2 == 2 && 5 > 3 || 10 > 3)

// 8. Añade alguna negacion

console.log(!(2 == 2 && 5 > 3))

// 9. Utiliza el operador terniario

let imStudying = true
imStudying ? console.log("I'm studying at the moment, sorry.") : console.log("Yeah, let's go out!")

// 10. Combina operadores aritmeticos, de comparacion y logicos

console.log(2 + 5 < 10 + 20 || 4 / 2 > 35 ** 2)