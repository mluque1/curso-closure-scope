const fun2 = () => {
    for (var i = 0; i < 10; i++){
        setTimeout(() =>{
            console.log(i)
        }, 1000);
    }
}
fun2()

// Un ciclo for con var es como un closure no 
// intencionado, algo de este estilo:
const forLoop = () => {
    var i = 0
    const iter = () => {
        setTimeout(() =>{
            console.log(i)
        }, 1000);
        i++
    };
    return iter;
};
let miniLoop = forLoop();
miniLoop(); // i = 0
miniLoop(); // i = 1
miniLoop(); // i = 2
miniLoop(); // i = 3
miniLoop(); // i = 4
miniLoop(); // i = 5
miniLoop(); // i = 6
miniLoop(); // i = 7
miniLoop(); // i = 8
miniLoop(); // i = 9