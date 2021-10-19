<template>
    <div v-if="teste">
        <h1>O meu nome é {{nome}} </h1>
        <!-- Não colocar v-bind diretamente no app.vue pois o link não carrega por algjum motivo-->
        <p>Teste link dinamico com v-bind <a v-bind:href="link_dinamico" target="blank">basta clicar aqui</a></p>
    </div>
</template>

<script>
export default {
    name: 'LifeCycle',
    data() {
        return {            
            nome: 'Ainda não sei',
            link_dinamico: 'https://google.com',
            teste: false 
        }
    }, /* Os eventos a seguir acontecem em sequencia, porém com o settimeout isso pode variar pela duração de cada */
    created() {
        setTimeout(() => {
            this.nome = 'Leandro'    
        }, 1000);
        
    },
    mounted() {
        setTimeout(() => {
            this.nome = 'Ana'    
        }, 2000);
        
    },
}
</script>