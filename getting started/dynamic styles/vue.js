new Vue({
	el: '#app',
  data: {
  	color: 'gray', // default
    width: 100 // default
  },
  computed: {
  	myStyle: function() {
    	return {
      	backgroundColor: this.color,
        width: this.width + 'px'
      };
    }
  }
});