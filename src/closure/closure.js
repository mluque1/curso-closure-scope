//Sin closure
const moneyBox = (coins) => {
    var saveCoins = 0;    
    saveCoins += coins;
    console.log(`Money box: $${saveCoins}`);
};
moneyBox(5);  // 5
moneyBox(10); // 10
//No registra el ingreso total de monedas.


const moneyBox2 = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`Money box: $${saveCoins}`);
    };
    return countCoins;
};

let monedero = moneyBox2();
monedero(1); // 1
monedero(10);// 11
monedero(7); // 18



const banco = (ta = false) => {
    var saldo = 0;
    var tarjetaAmigo = ta

    const modSaldo = (value) => {
        saldo += value;
    }

    const saldoInsuficiente = (value) => {
        return saldo < value*-1;
    }

    const esAmigo = (value) => {
        if (!tarjetaAmigo) {
            console.log('Saldo insuficiente. Si desea poder sacar dinero tiene que tener una tarjeta amigo.');
            return;
        }
        console.log(`Tarjeta amigo detectada. disfrute de su retiro de: $${value*-1}.`);
        modSaldo(value)
    };

    const addCoins = (value) => {
        if (value < 0){
            if (saldoInsuficiente(value)){
                esAmigo(value);
            } else {
                console.log(`Disfrute de su retiro de $${value*-1}.`)
                modSaldo(value);
            }
        } else if (value > 0) {
            console.log(`Has añadido: $${value}.`);
            modSaldo(value);
        } else {
            console.log('Ah como chingas.');
        }
        console.log(`Saldo actual: $${saldo}`);
        console.log()
    };

    const serAmigo = () => {
        tarjetaAmigo = true
    }
    return { addCoins, serAmigo };
};

let banquito = banco();
banquito.addCoins(10);
banquito.addCoins(10);
banquito.addCoins(-30);
banquito.serAmigo();
banquito.addCoins(-30);