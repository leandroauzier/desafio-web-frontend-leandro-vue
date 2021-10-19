const projetoCli ={
    data() {
        return {
            nome: "João",
            email: "",
            idade:"",
            input_name:""
        }
    },
    methods: {
        submitForm(e){
            e.preventDefault();
            this.name = this.input_name;
        }
    },
}

vue.createApp(projetoCli).mount('#app')