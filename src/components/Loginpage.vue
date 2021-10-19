<template>
    <div>
        <Form />
        <button @click="showEmail">Mostrar email</button>
        <p v-show="mostrar_email">Seu email é: {{ InputEmail }}</p>
    </div>
</template>

<script>
import Form from './FormLogin.vue'
import InputEmail from './forms/InputEmail.vue'

export default {
    name: 'Loginpage',
    components:{
        Form,
    },
    data() {
        return {
            mostrar_email: true,
            InputEmail,
        }
    },
    methods: {
        showEmail(){
            this.mostrar_email = !this.mostrar_email
        }
    },
    
}
</script>