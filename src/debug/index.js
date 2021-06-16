var a = 'Hello';
function hello () {
    let b = 'Hello world';
    const c = 'Hello world!!';
    if (true) {
        let d = '¡¡Hello world!!';
        debugger;
    }
}
hello();

const moneyBox2 = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`Money box: $${saveCoins}`);
    };
    return countCoins;
};

let monedero = moneyBox2();
monedero(1);
monedero(10);
monedero(7);