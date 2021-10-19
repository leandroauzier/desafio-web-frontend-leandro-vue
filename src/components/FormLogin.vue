<template>
<div>
    <form action="">
        <div>
            <InputEmail />
        </div>
        <div>
            <InputPassword />
        </div>
        <div>
            <Submit  />
        </div>
    </form>
</div>
</template>

<script>
import InputEmail from './forms/InputEmail.vue'
import InputPassword from './forms/InputPassword.vue'
import Submit from './forms/Submit'

    export default {
        name: 'FormLogin',
        components:{
            InputEmail,
            InputPassword,
            Submit,
        }
    }
</script>