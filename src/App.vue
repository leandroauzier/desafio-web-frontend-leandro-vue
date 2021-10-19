<template>
  <div>
    <meu-component />
    <life-cycle />
    <Loginpage />
  </div>
</template>

<script>
import MeuComponent from './components/MeuComponent.vue'
import LifeCycle from './components/LifeCycle.vue'
import InputEmail from './components/forms/InputEmail.vue'
import FormLogin from './components/FormLogin'
import Loginpage from './components/Loginpage.vue'


export default {
    name: "App",
    components: {
      MeuComponent,
      LifeCycle,
      InputEmail,
      FormLogin,
      Loginpage,

    }
  }
</script>