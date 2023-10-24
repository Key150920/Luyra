import React from 'react';
import Logo from '../images/newlogov2.png';
import { Link } from "react-router-dom";
import TiendaLink from '../componentes/tienda';
import '../styles/styles.css';

function Menu() {
  return (
    <div className='Menu'>
      <nav class="navbar bg-body-tertiary fixed-top">
        <div class="container-fluid">
          <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <img src={Logo} alt="Logo" width="100" height="40" class="d-inline-block align-text-top" />
              </a>
            </div>
          </nav>
          <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Luyra ¡Aprende y crea sin límites!</h5>
              <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <Link class="nav-link active" aria-current="page" to="/">Inicio</Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Ligas</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Comunidad</a>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/tienda">Tienda</Link>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Nube de Código</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Ajustes
                  </a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Seguridad</a></li>
                    <li><a class="dropdown-item" href="#">Privacidad</a></li>
                    <li><a class="dropdown-item" href="#">Subscripción</a></li>
                    <li><a class="dropdown-item" href="#">Ayuda y Soporte</a></li>
                    <li><a class="dropdown-item" href="#">Editar Perfil</a></li>
                    <li><a class="dropdown-item" href="#">Más</a></li>


                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li><a class="dropdown-item" href="#">Cerrar Sesión</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>

  );

}
export default Menu;
