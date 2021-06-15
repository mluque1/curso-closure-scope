const fun1 = () =>{
    var fruit = 'apple';
    console.log(fruit);
};
fun1();
console.log(fruit); //ReferenceError: fruit is not defined


const fun2 = () => {
    var x = 1;
    var x = 2; //Normal
    let y = 1;
    let y = 2; //SyntaxError: Identifier 'y' has already been declared
    //No se puede redeclarar las variables declaradas con let o const
    console.log(x);//2
    console.log(y);//1
};
fun2();
//Como var si puede redeclarar, lo mejor es usar let y const en lugar de var.