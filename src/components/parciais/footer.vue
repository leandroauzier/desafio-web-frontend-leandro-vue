<template>
    <div>
        <br>
        <footer>
            <div class="container-fluid">
            <div class="row">
                <div class="col-md-12">
                    <div class="footer-conteudo float-center text-center">
                        <p style="text-align: center;">© Copyright {{currentYear}} Algoritme - Todos os direitos reservados</p>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  }
};
</script>