let contenedorCarrusel = document.getElementById("contenedorCarrusel")
let contenedorCarrusel2 = document.getElementById("contenedorCarrusel2")
let contenedorFooter = document.getElementById("contenedorFooter")

function mostrarCarrusel() {
  let crearCarrusel = document.createElement("div");
  crearCarrusel.id = "carouselExampleIndicators";
  crearCarrusel.className = "carousel slide";
  crearCarrusel.innerHTML = `    
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div class="carousel-inner">
          <div class="carousel-item active position-relative">
            <img src="./Recursos_Empresa_Eventos/banner_1.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-md-block position-absolute top-50 start-50 translate-middle">
              <h2>MATRIMONIOS</h2>
            </div>
          </div>
          <div class="carousel-item position-relative">
            <img src="./Recursos_Empresa_Eventos/banner_2.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-md-block position-absolute top-50 start-50 translate-middle">
              <h2>EVENTOS EMPRESARIALES</h2>
            </div>
          </div>
          <div class="carousel-item position-relative">
            <img src="./Recursos_Empresa_Eventos/banner_3.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-md-block position-absolute top-50 start-50 translate-middle">
              <h2>GRADUACIONES</h2>
            </div>
          </div>
          <div class="carousel-item position-relative">
            <img src="./Recursos_Empresa_Eventos/banner_5.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-md-block position-absolute top-50 start-50 translate-middle">
              <h2>CONCIERTOS</h2>
            </div>
          </div>
          <div class="carousel-item position-relative">
            <img src="./Recursos_Empresa_Eventos/banner_4.jpg" class="d-block w-100" alt="...">
            <div class="carousel-caption d-md-block position-absolute top-50 start-50 translate-middle">
              <h2>QUINCE AÑOS</h2>
            </div>
          </div>
        </div>
      </div>
      `
  contenedorCarrusel.appendChild(crearCarrusel)
}

function mostrarFooter() {
  let crearFooter = document.createElement("div")
  crearFooter.className = "container-fluid"
  crearFooter.innerHTML = `
          <div>
          <a class="navbar-brand" href="https://www.facebook.com/"><img src="./Recursos_Empresa_Eventos/facebook.png" alt="" class="redes"></a>
          <a class="navbar-brand" href="https://www.instagram.com/"><img src="./Recursos_Empresa_Eventos/instagram.png" alt="" class="redes"></a>
          <a class="navbar-brand" href="https://web.whatsapp.com/"><img src="./Recursos_Empresa_Eventos/whatsapp.png" alt="" class="redes"></a>
        </div>
          <div class="justify-content-end">
            <p class="fs-6 text footer">© 2024 Yeison Lopez y Cristian Maiguel</p>
          </div>
`
  contenedorFooter.appendChild(crearFooter)
}

mostrarCarrusel()
mostrarFooter()

