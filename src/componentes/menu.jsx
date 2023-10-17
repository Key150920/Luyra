import React from 'react';


function Menu(){
    return(
        <div className='Menu'>
          <div id="mainNavigation">
      <nav role="navigation">
        <div class="py-3 text-center border-bottom">
          <img src="../images.logo.png" alt="Luyra logo" class="invert"/>
        </div>
      </nav>
      <div class="navbar-expand-md">
        <div class="navbar-dark text-center my-2">
          <button class="navbar-toggler w-75" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span> <span class="align-middle">Menu</span>
          </button>
        </div>
        <div class="text-center mt-3 collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav mx-auto ">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Inicio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Comunidad</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Ligas</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Nube</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Configuración
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <li><a class="dropdown-item" href="#">Seguridad</a></li>
                <li><a class="dropdown-item" href="#">Privacidad</a></li>
                <li><a class="dropdown-item" href="#">Editar Perfil</a></li>
                <li><a class="dropdown-item" href="#">Subscripción</a></li>
                <li><a class="dropdown-item" href="#">Ayuda y Soporte</a></li>
                <li><a class="dropdown-item" href="#">Otros ajustes</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
     </div>

    );

}
export default Menu;
