new Vue({
    el: '#app',
    data: {
        name: 'Jacob', // default
        userInput: 0,
        randomNumber: 10,
    },
    methods: {
      getRand: function(min, max) {
        return Math.floor(Math.random() * (max -min +1)) + min;
      },
    },
    computed: {
      text: function() {
        if (this.userInput == this.randomNumber) {
          this.randomNumber = this.getRand(1, 10);
          return 'Rigtigt!';
        } else {
          this.randomNumber = this.getRand(1, 10);
          return 'Prøv igen!';
        }
      }
    },
  });