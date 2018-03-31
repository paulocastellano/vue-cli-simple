<template>
  <div class="section-login">
    <div class="bg-city"></div>
    <div class="container"> <!-- justify-content-center-->
      <div class="row justify-content-center">
        <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-10">

          <a href="login.html">
            <img src="../assets/img/logo.png" class="logo-login img-fluid" alt="123 Carros">
          </a>

          <p class="background-line"><span>Cadastro</span></p>

          <div class="box-social-login">

            <button class="btn btn-facebook btn-block text-uppercase">
              <span class="social-icon fa-lg">
                <i class="fab fa-facebook-f"></i>
              </span>
              <label>Cadastrar com Facebook</label>
            </button>

            <button class="btn btn-gmail btn-block text-uppercase btn-esp-top-15">
              <span class="social-icon fa-lg">
                <i class="fab fa-google"></i>
              </span>
              <label>Cadastrar com Gmail</label>
            </button>

          </div>

          <div class="or">ou</div>

          <div class="box-form-login register-form">

            <div class="form-group">
              <label>Nome</label>
              <i class="fas fa-user"></i>
              <input type="text" class="form-control custom-input" placeholder="" required>
            </div>

            <div class="form-group">
              <label>E-mail</label>
              <i class="far fa-envelope"></i>
              <input type="email" class="form-control custom-input" placeholder="" required>
            </div>

            <div class="form-group">
              <label>Senha</label>
              <i class="fas fa-lock"></i>
              <input type="password" class="form-control custom-input" placeholder="" required>
            </div>

            <div class="form-group">
              <label>Confirmar Senha</label>
              <i class="fas fa-lock"></i>
              <input type="password" class="form-control custom-input" placeholder="" required>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
              <div class="terms">
                Li e concordo com os <a href="#">TERMOS DE USO</a>.
              </div>
            </div>

            <button class="btn btn-primary btn-block text-uppercase">Cadastrar</button>

          </div>

          <div class="back text-center text-uppercase">
            <a href="login.html">Voltar</a>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
