<template>
  <div class="section-login">
    <div class="bg-city"></div>
    <div class="container"> <!-- justify-content-center-->
      <div class="row justify-content-center">
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-10">

          <a href="login.html">
            <img src="../assets/img/logo.png" class="logo-login img-fluid" alt="123 Carros">
          </a>

          <p class="background-line line-recover-password"><span>Recuperar Senha</span></p>

          <div class="icon text-center">
            <i class="fas fa-check"></i>
          </div>

          <p class="intro"><strong>Uma mensagem de redefinição de senha será enviada em breve para o e-mail socilitado.</strong></p>

          <p class="intro">Caso não tenha recebido, por gentileza, certifique-se de ter inserido o e-mail cadastrado corretamente.</p>

          <form action="login.html" method="get">
            <button class="btn btn-primary btn-block text-uppercase">VOLTAR PARA PÁGINA INICIAL</button>
          </form>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SucessPassword'
}
</script>

<style>
</style>
