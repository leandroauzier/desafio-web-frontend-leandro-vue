<!-- Template só aceita um unico tipo de arquivo, para mais de um, botar numa unica DIV -->
<template>
  <div>
    <!-- V-if else condiciona os componentes que apareceram na view -->
    <h1 v-if="teste">Ola Vue!</h1>
    <p v-if="teste">Meu nome é {{nome}} e sou {{profissao}}</p>
  </div>
</template>

<script>

export default {
    name: "MeuComponent",
    components:{
      },
    data(){
        return{
          nome:"Leandro",
          profissao:"Programador",
          teste: false,
        }      
      }
  }
</script>