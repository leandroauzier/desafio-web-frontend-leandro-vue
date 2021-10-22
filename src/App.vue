<template>
  <div>
    <header>
      <Header />
    </header>
    <meu-component />
    <life-cycle />
    <Loginpage />
    <Footer/>
  </div>
</template>

<script>
import MeuComponent from './components/MeuComponent.vue'
import LifeCycle from './components/LifeCycle.vue'
import InputEmail from './components/forms/InputEmail.vue'
import FormLogin from './components/FormLogin'
import Loginpage from './components/Loginpage.vue'
import Header from './components/parciais/header.vue'
import Footer from './components/parciais/footer.vue'


export default {
    name: "App",
    components: {
      MeuComponent,
      LifeCycle,
      InputEmail,
      FormLogin,
      Loginpage,
      Header,
      Footer,
    }
  }
</script>

<style>
footer{
    color:white;
    padding: 20px 5px;
    background-color: #203024;
    width: 100%;
    background-attachment: scroll;
    position: fixed;
    bottom: 0;
    margin:auto;
}
#tabela{
    background-color: #FFFFFF;
    border-radius: 10px;
    padding: 5px 30px 40px 30px;
    box-shadow: 5px 10px 10px black;
    margin-bottom: 100px;
    margin-top:100px;
}

</style>