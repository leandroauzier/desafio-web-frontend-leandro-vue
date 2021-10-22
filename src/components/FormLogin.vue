<template>
<div class="container-fluid cont-login">
    <div class="row d-flex justify-content-center">
        <form action=""  style="background-color: #fff;" class="form-group" id="tabela">
            <Logo/>
            <div style="padding: 10px">
                <InputEmail />
            </div>
            <div style="padding: 10px">
                <InputPassword />
            </div>
            <div style="padding: 10px">
                <Submit  />
            </div>
        </form>
    </div>
</div>
</template>

<script>
import InputEmail from './forms/InputEmail.vue'
import InputPassword from './forms/InputPassword.vue'
import Submit from './forms/Submit'
import Logo from './logo.vue'

    export default {
        name: 'FormLogin',
        components:{
            InputEmail,
            InputPassword,
            Submit,
            Logo,
        }
    }
</script>