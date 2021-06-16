a = 2;
var a; //El hoisting eleva las declaraciones de var lo más arriba posible
console.log(a); // 2

console.log(b); //undefinde
var b = 2;


//Ejecutar una función después de declararla.
function nameOfDog(name) {
    console.log(name); 
}
nameOfDog('Eustaquio'); // Ejecución normal si ningún problema


//Ejecutar una función previo a declararla.
saludar('Miguel'); // Ejecución normal si ningún problema gracias al hoisting
function saludar(name) {
    console.log(`¡Hola ${name}!`); 
}
