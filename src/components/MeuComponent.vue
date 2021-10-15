<!-- Template só aceita um unico tipo de arquivo, para mais de um, botar numa unica DIV -->
<template>
  <div>
    <h1>Ola Vue!</h1>
    <p>Meu nome é {{nome}} e sou {{profissao}}</p>
  </div>
</template>

<script>
export default {
    name: "MeuComponent",
    data(){
        return{
          nome:"Leandro",
          profissao:"Programador"
        }      
      }
  }
</script>