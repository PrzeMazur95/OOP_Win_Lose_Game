class Wallet {

    constructor(money) {

        let _money = money;

        //pobieranie aktualnej zawartści portfela

        this.getWalletValue = () => _money;

        //sprawdzaine czy użytkownik ma odpowwiednią ilość środków do gry

        this.checkCanPlay = value => {

            if(_money >= value) return true;
            return false;

        }

        this.changeWallet = (value, type = "+") => {

            if(typeof value === "number" && !isNaN(value)){

                if (type === "+"){

                    return _money += value;

                } else if (type === "-"){

                    return _money -= value;

                } else {

                    throw new Error("nieprawidłowy typ działania");

                }

            } else {

                console.log(typeof value);
                throw new Error ("nieprawidłowa liczba");

            }

        }

    }

}
