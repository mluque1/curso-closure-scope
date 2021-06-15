// Puede ser accedida de forma global ya que no se encuentra dentro de una función o bloque.
var hello = 'Hello';
var hello = 'Hello+'; //Funciona sin problema, pero es una mala práctica
let world = 'World!';
let world = 'World!+'; //SyntaxError: Identifier 'world' has already been declared
const helloWorld = 'Hello World!';

const fun = () => {
    console.log(hello);
    console.log(world);
    console.log(helloWorld);
}
fun();


const fun2 = () => {
    //Al no especificar si es var, let o const se crea una variable global desde una función.
    globalVar = 'Im global! Fun2';
}
fun2();
console.log(globalVar);
//Se puede acceder sin ningún problema, pero es una mala práctica


const fun3 = () => {
    //La doble asignación genera una variable global
    var localVar = globalVar = 'Im global! Fun3';
    //Otra mala práctica, mejor hacer uso de:
    let var1, var2, var3 = 'No somos globales'
}
fun3();
console.log(globalVar);