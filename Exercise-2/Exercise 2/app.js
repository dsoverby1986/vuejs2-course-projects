new Vue({
    el: '#exercise',
    data: {
        value: ''
    },
    methods: {
        alert: function(){
            alert("The button has been clicked!");
        },
        store: function(e){
            this.value = e.target.value;
        }
    }
});