class Statistics {

    constructor() {

        this.gameResults = [];

    }

    addGameToStatistics(win, bid){

        //dodawanie wyniku gry do tablicy
        let gameResult = {

            win: win, 
            bid: bid

        }

        // console.log(gameResult);
        this.gameResults.push(gameResult)
    }

    showGameStatistics() {

        //sprawdzaanie ilości gier
        let games = this.gameResults.length;
        //sprawdzanie ilości wygranych
        let wins = this.gameResults.filter(result => result.win).length;
        //sprawdzanie ilości przegranych
        let losses = this.gameResults.filter(result =>!result.win).length;
        // console.log(games, wins, losses);
        // zwraca ilośc gier, wygranych i przegranych
        return [games, wins, losses];
    }

}
