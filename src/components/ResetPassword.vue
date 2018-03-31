<template>
  <div class="section-login">
    <div class="bg-city"></div>
    <div class="container"> <!-- justify-content-center-->
      <div class="row justify-content-center">
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-10">

          <a href="index.html">
            <img src="../assets/img/logo.png" class="logo-login img-fluid" alt="123 Carros">
          </a>

          <p class="background-line line-recover-password"><span>Recuperar Senha</span></p>

          <p class="intro">Por favor, digite sua nova senha.</p>

          <div class="box-form-login">

            <form action="redefinir-senha-sucesso.html" method="get">

              <div class="form-group">

                <label>Nova Senha</label>
                <i class="fas fa-lock"></i>
                <input type="password" class="form-control custom-input" placeholder="" required>

              </div>

              <div class="form-group">

                <label>Repetir Senha</label>
                <i class="fas fa-lock"></i>
                <input type="password" class="form-control custom-input" placeholder="" required>

              </div>

              <button class="btn btn-primary btn-block text-uppercase">REDEFINIR SENHA</button>

            </form>

          </div>

          <div class="back text-center text-uppercase">
            <a href="#">Voltar</a>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResetPassword'
}
</script>

<style>
</style>
