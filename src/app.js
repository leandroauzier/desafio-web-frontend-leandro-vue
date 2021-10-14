const MyNameApp = {
    data(){
        return{
            name: "",
            idade: "24",
            input_name: ""
        }
    },
    //Funções da aplicação
    methods: {
        submitForm(e){
            //Cancela o evento se for cancelável, sem parar a propagação do mesmo.
            e.preventDefault();
            console.log(this.input_name);
            this.name = this.input_name;
        }
    }
}
//Exporta com mount
Vue.createApp(MyNameApp).mount("#app");