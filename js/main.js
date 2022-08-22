const app = new Vue({
    el: '#app',
    data:{
        resp: null,
        emails: []
    },
    methods:{
        getEmail: function(){
            this.emails = []
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response => {
                    this.resp = response.data.response
                    this.emails.push(this.resp)
                })
            }
        }
    }
})



