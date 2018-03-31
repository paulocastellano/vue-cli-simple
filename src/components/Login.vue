<template>
  <div class="section-login">
    <div class="bg-city"></div>
    <div class="container"> <!-- justify-content-center-->
      <div class="row justify-content-center">
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-10">
          <a href="login.html">
            <img src="../assets/img/logo.png" class="logo-login img-fluid" alt="123 Carros">
          </a>
          <p class="background-line"><span>Entrar</span></p>
          <div class="box-social-login">
            <button class="btn btn-facebook btn-block text-uppercase">
              <span class="social-icon fa-lg">
                <i class="fab fa-facebook-f"></i>
              </span>
              <label>Entrar com Facebook</label>
            </button>
            <button class="btn btn-gmail btn-block text-uppercase btn-esp-top-15">
              <span class="social-icon fa-lg">
                <i class="fab fa-google"></i>
              </span>
              <label>Entrar com Gmail</label>
            </button>
          </div>
          <div class="box-form-login">
            <div class="form-group">
              <label>E-mail</label>
              <i class="far fa-envelope"></i>
              <input type="email" class="form-control custom-input" placeholder="" required>
            </div>
            <div class="form-group">
              <label>Senha</label>
              <span><a href="esqueci-minha-senha.html">Esqueceu sua senha?</a></span>
              <i class="fas fa-lock"></i>
              <input type="password" class="form-control custom-input" placeholder="" required>
            </div>
            <button class="btn btn-primary btn-block text-uppercase">Entrar</button>
            <p class="text-uppercase text-center">Ainda não possuí uma conta? <a href="cadastrar.html">Cadastrar</a></p>
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
  name: 'Login'
}
</script>

<style>
</style>
