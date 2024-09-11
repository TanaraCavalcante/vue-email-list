/*const (createApp) = Vue;

createApp({
    data(){
        return {

        }
    }
}).mount('#app')*/

axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
    .then(function (element){
        console.log(element)
    }
);