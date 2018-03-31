<template>
  <div class="section-blank">
    <div class="container">
      <div class="row">
        <div class="col">

          <h2 style="margin-top: 60px;">Paragraph</h2>
          <hr style="width:100%;">

          <h1>H1 - Lorem ipsum dolor</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea sapiente necessitatibus maxime officia harum modi obcaecati quos ab pariatur, veritatis tempore dicta libero commodi, eius quibusdam delectus, reiciendis inventore voluptas. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi a, quaerat dicta, officiis quia saepe quisquam explicabo nulla! Vero voluptatibus iure fugit tenetur ratione, amet, dolorem provident ut. Aperiam.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea sapiente necessitatibus maxime officia harum modi obcaecati quos ab pariatur, veritatis tempore dicta libero commodi, eius quibusdam delectus, reiciendis inventore voluptas. Lorem
            ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi a, quaerat dicta, officiis quia saepe quisquam explicabo nulla! Vero voluptatibus iure fugit tenetur ratione, amet, dolorem provident ut. Aperiam.</p>

        </div>

      </div>
      <div class="row">
        <div class="col-12">
          <h2 style="margin-top: 60px;">Ui Elements</h2>
          <hr style="width:100%;">
        </div>
        <div class="col-2">

          <button class="btn btn-primary btn-block text-uppercase">Primary</button>

        </div>
        <div class="col-2">

          <button class="btn btn-secondary btn-block text-uppercase">Secondary</button>

        </div>
        <div class="col-4">

          <button class="btn btn-facebook btn-block text-uppercase">
              <span class="social-icon fa-lg">
                <i class="fab fa-facebook-f"></i>
              </span>
              Entrar com Facebook
            </button>

        </div>
        <div class="col-4">

          <button class="btn btn-gmail btn-block text-uppercase">
              <span class="social-icon fa-lg">
                <i class="fab fa-google"></i>
              </span>
              Entrar com Gmail
            </button>

        </div>
      </div>
      <div class="row">
        <div class="col">
          <hr>
        </div>
      </div>
      <div class="row">

        <div class="col-1">

          <button class="btn btn-map text-uppercase text-center">
              <span class="social-icon fa-2x">
                <i class="fas fa-map"></i>
              </span><br/>
              Mapa
            </button>

        </div>

        <div class="col-2">

          <button class="btn btn-success btn-block text-uppercase">Success</button>

        </div>
        <div class="col-2">

          <button class="btn btn-cancel btn-block text-uppercase">Cancel</button>

        </div>
        <div class="col-2">

          <button class="btn btn-disabled btn-block text-uppercase">Disabled</button>

        </div>

      </div>
    </div>
    <div class="container">
      <div class="row" style="margin-top: 60px;">
        <div class="col">

          <h2>Forms</h2>
          <hr style="width:100%;">
        </div>

      </div>
      <div class="row">

        <div class="col-4">

          <div class="form-group">
            <input type="text" class="form-control custom-input " placeholder="Empty Text">
          </div>

        </div>
        <div class="col-4">

          <div class="form-group">
            <input type="text" class="form-control custom-input-error" placeholder="Error">
            <small class="input-error-text">Error Message...</small>
          </div>

        </div>
        <div class="col-4">

          <div class="form-group">
            <input type="text" class="form-control custom-input-disabled" placeholder="Empty Text" disabled>
          </div>

        </div>
        <div class="col-lg-6">

          <div class="form-group">

            <select class="form-control custom-select">
              <option selected disabled>Dropdown</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>

          </div>

        </div>

        <div class="col-lg-6">

          <div class="form-group">
            <textarea class="form-control custom-text-area" rows="5" placeholder="Empty Text area"></textarea>
          </div>

        </div>

      </div>
    </div>
    <div class="container">
      <div class="row" style="margin-top: 60px;">
        <div class="col">

          <h2>Lines</h2>
          <hr style="width:100%;">
        </div>

      </div>
      <div class="row">

        <div class="col-12">

          <hr>

        </div>

      </div>
    </div>
    <div class="container">
      <div class="row" style="margin-top: 60px;">
        <div class="col">

          <h2>Paginação</h2>
          <hr style="width:100%;">
        </div>

      </div>
      <div class="row">

        <div class="col-6">

          <ul class="list-inline pagination">
            <li class="list-inline-item">
              <a href="#"><i class="fas fa-caret-left fa-2x"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="#">1</a>
            </li>
            <li class="list-inline-item">
              <a href="#">2</a>
            </li>
            <li class="list-inline-item">
              <a href="#">3</a>
            </li>
            <li class="list-inline-item">
              <a href="#"><i class="fas fa-caret-right fa-2x"></i></a>
            </li>
          </ul>

        </div>

        <div class="col-6">

          <ul class="list-inline pagination-circle">
            <li class="list-inline-item">
              <a href="#"><i class="fas fa-caret-left fa-2x"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="#"><i class="fas fa-circle fa-xs item active"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="#"><i class="fas fa-circle fa-xs item"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="#"><i class="fas fa-circle fa-xs item"></i></a>
            </li>
            <li class="list-inline-item">
              <a href="#"><i class="fas fa-caret-right fa-2x"></i></a>
            </li>
          </ul>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Typografy'
}
</script>

<style>
</style>
