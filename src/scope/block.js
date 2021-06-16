const fun1 = () => {
    if (true){
        var fruit1 = 'apple';
        // let y const Se vuelve inaccesible por 
        // fuera del bloque, en este caso del bloque
        // if
        let fruit2 = 'banana';
        const fruit3 = 'kiwi';

        console.log(fruit2); //banana
        console.log(fruit3); //kiwi
    }
    console.log(fruit1); //apple
    console.log(fruit2); //ReferenceError
    console.log(fruit3); //ReferenceError
}
fun1()


let x = 1
{
    let x = 2;
    console.log(x); //2
    // Con let existe una distinción entre la variable 
    // interna del bloque y la externa
}
console.log(x); //1 


var x = 1
{
    var x = 2;
    console.log(x); //2
    // Con var la variable x se altera tanto por dentro 
    // como por fuera del bloque
}
console.log(x); //2


// En caso de que la variable i sea un var la impresión 
// será de varios '10' esto porque la variable i conforme 
// cambiaba en el foorloop se iba reactualizando, por otro 
// lado cuando i sean let este va a mostrar los valores 
// del 0 al 9.
const fun2 = () => {
    for (let i = 0; i < 10; i++){
        setTimeout(() =>{
            console.log(i)
        }, 1000);
    }
}
fun2()