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

          <p class="intro">Enter the email address you used when you joined and we’ll send you instructions to reset your password.</p>

          <p class="intro">For security reasons, we do NOT store your password. So rest assured that we will never send your password via email.</p>

          <div class="box-form-login">

            <form action="redefinir-senha.html" method="get">

              <div class="form-group">

                <label>E-mail Cadastrado</label>
                <i class="far fa-envelope"></i>
                <input type="email" class="form-control custom-input" placeholder="" required>

              </div>

              <button type="submit" class="btn btn-primary btn-block text-uppercase d-none d-md-block d-lg-block">ENVIAR INSTRUÇÕES PARA REDEFINIR SENHA</button>

              <button type="submit" class="btn btn-primary btn-block text-uppercase d-block d-sm-none">ENVIAR INSTRUÇÕES</button>

            </form>

          </div>

          <div class="back text-center text-uppercase">
            <a href="login.html">Voltar</a>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecoverPassword'
}
</script>

<style>
</style>
