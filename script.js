const {createApp} = Vue;

createApp({
    data(){
        return {

        }
    },
    methods: {
        getEmails(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((element) => {
            console.log(element.data.response)
            }
);
        }   
    }
}).mount('#app')

