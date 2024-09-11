const {createApp} = Vue;

createApp({
    data(){
        return {
            email: 'Test',
            apiURL: "https://flynn.boolean.careers/exercises/api/random/mail" ,
        }
    },
    methods: {
        getEmails(){
            axios.get(this.apiURL)
            .then((element) => {
            this.email = element.data.response;
            console.log(element.data.response);
            }
            );
        }   
    },
    mounted(){
        this.getEmails();
    }
    
}).mount('#app')

