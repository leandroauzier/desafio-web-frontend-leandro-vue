<template>
    <div>
        <!-- Colocar somente ":" é a mesma coisa que inserir o v-bind no código -->
      <img :src="logo" :alt="descricao">  
    </div>
</template>
<script>
export default {
    name: "logo",
    data() {
        return {
            logo:"/img/algoritme.png",
            descricao: "logo algoritme"
        }
    },
}
</script>