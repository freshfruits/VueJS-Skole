var vm = new Vue({
    el: '#app',
    data: {
        status: '',
        name: 'Jacob' // Default
    },
    created: function() {
        this.loadQuote();
    },
    methods: {
            loadQuote: function() {
                this.status;

                var vm = this;

                axios.get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
                .then(function(response) {
                    vm.status = response.data[0];
                })
                .catch(function(error) {
                    vm.status = 'Error! ' + error;
                })
            },

            refresh: function () {
                this.loadQuote();
            },
    }
});