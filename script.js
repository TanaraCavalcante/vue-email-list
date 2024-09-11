const {createApp} = Vue;

createApp({
    data(){
        return {
            email: '',
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
   
    computed: {
        //creare 10 li con v-for
    }
    
}).mount('#app')

