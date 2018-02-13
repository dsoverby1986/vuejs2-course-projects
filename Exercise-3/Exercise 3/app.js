new Vue({
        el: '#exercise',
        data: {
            value: 0,
            timeout: 5000
        },
        computed: {
                result: function(){
                    return this.value >= 37 ? 'done' : 'not there yet';
                }
        },
        watch: {
            value: function(){
                if(this.result === 'done'){
                    var vm = this;
                    setTimeout(function(){
                        vm.value = 0;
                    }, vm.timeout);
                }
            }
        }
    });