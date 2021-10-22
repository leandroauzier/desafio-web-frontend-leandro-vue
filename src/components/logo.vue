<template>
    <div>
        <!-- Colocar somente ":" é a mesma coisa que inserir o v-bind no código -->
      <img :src="logo" :alt="descricao" :width= w :height= h>  
    </div>
</template>
<script>
export default {
    name: "logo",
    data() {
        return {
            logo:"/img/algoritme.png",
            descricao: "logo algoritme",
            w: 300,
            h: 67.22,
        }
    },
}
</script>