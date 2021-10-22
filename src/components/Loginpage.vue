<template>
    <div>
        <Form />
        <div style="padding: 10px;"> 
            <button class="btn btn-secondary btn-lg" @click="showEmail">{{botaoMostrar}}</button>
        </div>
            <p v-show="mostrar_email">Seu email é: {{ email }}</p>
    </div>
</template>

<script>
import Form from './FormLogin.vue'
import InputEmail from './forms/InputEmail.vue'

export default {
    name: 'Loginpage',
    components:{
        Form,
        InputEmail,
    },
    data() {
        return {
            mostrar_email: false,
            email: 'teste@email.com',
            botaoMostrar:  'Mostrar Email',
            InputEmail,
        }
    },
    methods: {
        showEmail(){
            this.mostrar_email = !this.mostrar_email
            if (!this.mostrar_email) {
                this.botaoMostrar = 'Mostrar Email'
            }else{
                this.botaoMostrar = 'Ocultar Email'
            }
        }
    },
    
}
</script>