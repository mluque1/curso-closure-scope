const buildCount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++)
    }
    return displayCount;
}
let counter1 = buildCount(1);
counter1();  //1
counter1();  //2
counter1();  //3

let counter10 = buildCount(10);
counter10(); //10
counter10(); //11
counter10(); //12
//Tanto counter1 como counter10 son independientes 
// uno del otro y podríamos hacer lo siguiente:
counter1();  //4
counter10(); //13
counter10(); //14
counter1();  //5
counter10(); //15
counter1();  //6