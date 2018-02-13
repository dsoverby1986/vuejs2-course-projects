new Vue({
    el: '#app',
    data: {
        title: 'Hello world!',
        link: 'http://coretechs.net'
    },
    methods: {
        changeTitle: function(event){
        this.title = event.target.value;
        },
        sayHello: function(){
            this.title = "Hello!";
            return this.title;
        }
    }
});