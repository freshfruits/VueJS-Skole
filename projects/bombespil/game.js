new Vue({
	el: '#app',
    data: {
        name: 'jacob', // default
        bombs: 5,
        hits: 0,
        attempts: 0,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function () {
            this.gameIsRunning = true;
            this.bombs = 5;
            this.hits = 0;
            this.attempts = 0;
            this.turns = [];
        },

        bomb: function () {
            
        },
        restart: function () {
            this.gameIsRunning = false;
        },

    }
});