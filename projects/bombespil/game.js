new Vue({
    el: '#app',
    data: {
        name: 'Jacob', // default
        gameIsRunning: false,
        bombs: 5,
        fields: 25,
        hits: 0,
        attempts: 0
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.bombs = 5;
            this.fields = 25;
            this.hits = 0;
            this.attempts = 0;

            console.log('New game started');
        },
        restartGame: function () {
            this.gameIsRunning = false;
        },
        checkField: function(field) {
            this.attempts++;

            if (this.checkWin()) {
                return;
            }

        },
        setBombe: function() {
            place = Math.floor((Math.random() * this.fields));
        },
        checkWin: function() {
            if (this.hits == 3) {
                if (confirm('You won! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.attempts == 10) {
                if (confirm('You lost! New Game?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});