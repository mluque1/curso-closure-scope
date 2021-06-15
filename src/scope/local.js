//Establecido el loque de código
const fun1 = () => {
    const hello = 'Hello World!';
    //Permite el acceso a la constante 'hello'
    console.log(hello);
};
fun1();
console.log(hello) //ReferenceError: hello is not defined
//Al no estár declarada de forma global, no podremos 
//acceder a ella por fuera del bloque de código


var scope = 'I\'m global';
const fun2 = () => {
    var scope = "I\'m just a local";
    const func3 = () => {
        return scope
    }
    console.log(func3())
}
fun2() //I'm just a local
console.log(scope) //I'm global