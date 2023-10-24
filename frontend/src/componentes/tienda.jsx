import React from "react";
import "../styles/login.css";
import luyra from "../images/shirt_luyra.png";
import luy from "../images/fashion_luyra.png";
import cute from "../images/cute_luyra.png";
import hatluyra from "../images/cowboy_luyra.png";
import crown from "../images/crown_luyra.png";
import unicornio from "../images/diademas_luyra.png";
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import store from '../images/store.png';
import Menu from './menu'

function Tiendas() {
  return (

    <div className="tienda">
      <Menu/>
      <section class="h-100">
        <div class="container py-5">
          <div class="row d-flex justify-content-center my-4">
            <div class="col-md-8">
              <div class="card mb-4">
                <div class="card-header py-3" >
                  <img src={store} alt="/" style={{ width: "40px", height: "40px" }} /><h5>Tienda Luyra</h5>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-12 col-md-12 mb-4 mb-lg-0">
                      <div
                        class="bg-image hover-overlay hover-zoom ripple rounded"
                        data-mdb-ripple-color="light"
                      >
                        {/* <img
                          src={luyra}
                          class="w-100"
                          alt="Camiseta rosa con dibujo para el Luyra"
                        /> */}
                        <div
                          id="carouselExampleInterval"
                          class="carousel slide"
                          data-bs-ride="carousel"
                        >
                          <div class="carousel-inner">
                            <div
                              class="carousel-item active"
                              data-bs-interval="10000"
                            >
                              {/* Primera imagen */}
                              <div class="card">
                                <img
                                  src={luyra}
                                  class="card-img-top"
                                  alt="luyra"
                                />
                                <div class="card-body">
                                  <h5 class="card-title">Camisa tierna morada</h5>
                                  <p class="card-text">
                                    Precio: 200 Luyras
                                  </p>
                                  <a href="#" class="btn btn-primary">
                                    Comprar
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                              {/* segunda imagen */}
                              <div class="card">
                                <img
                                  src={luy}
                                  class="card-img-top"
                                  alt="luyra"
                                />
                                <div class="card-body">
                                  <h5 class="card-title">Camisa tierna estrella</h5>
                                  <p class="card-text">
                                    Precio: 200 Luyras
                                  </p>
                                  <a href="#" class="btn btn-primary">
                                    Comprar
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="carousel-item">
                              {/* tercera imagen */}
                              <div class="card">
                                <img
                                  src={cute}
                                  class="card-img-top"
                                  alt="luyra"
                                />
                                <div class="card-body">
                                  <h5 class="card-title">Camisa sonriente morada</h5>
                                  <p class="card-text">
                                    Precio: 200 Luyras
                                  </p>
                                  <a href="#" class="btn btn-primary">
                                    Comprar
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button
                            class="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleInterval"
                            data-bs-slide="prev"
                          >
                            <span
                              class="carousel-control-prev-icon"
                              aria-hidden="true"
                            ></span>
                            <span class="visually-hidden">Previous</span>
                          </button>
                          <button
                            class="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleInterval"
                            data-bs-slide="next"
                          >
                            <span
                              class="carousel-control-next-icon"
                              aria-hidden="true"
                            ><MdOutlineArrowForwardIos /></span>
                            <span class="visually-hidden">Next</span>
                          </button>
                        </div>
                      </div>
                    </div>

                    <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      <p>
                        <strong>Camisas Luyra</strong>
                      </p>
                    </div>

                    <hr class="my-4" />
                    {/* este el la card con el buso rojo */}
                    <div
                      id="carouselExampleInterval2"
                      class="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div class="carousel-inner">
                        <div
                          class="carousel-item active"
                          data-bs-interval="10000"
                        >
                          {/* Primera imagen */}
                          <div class="card">
                            <img
                              src={hatluyra}
                              class="card-img-top"
                              alt="luyra"
                            />
                            <div class="card-body">
                              <h5 class="card-title">Sombrero cowboy</h5>
                              <p class="card-text">
                                Precio: 300 Luyras
                              </p>
                              <a href="#" class="btn btn-primary">
                                Comprar
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="2000">
                          {/* segunda imagen */}
                          <div class="card">
                            <img
                              src={crown}
                              class="card-img-top"
                              alt="luyra"
                            />
                            <div class="card-body">
                              <h5 class="card-title">Corona tierna</h5>
                              <p class="card-text">
                                Precio: 350 Luyras
                              </p>
                              <a href="#" class="btn btn-primary">
                                Comprar
                              </a>
                            </div>
                          </div>
                        </div>
                        <div class="carousel-item">
                          {/* tercera imagen */}
                          <div class="card">
                            <img
                              src={unicornio}
                              class="card-img-top"
                              alt="luyra"
                            />
                            <div class="card-body">
                              <h5 class="card-title">Diadema tierna de unicornio</h5>
                              <p class="card-text">
                                Precio: 300 Lyras
                              </p>
                              <a href="#" class="btn btn-primary">
                                Comprar
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button
                        class="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleInterval2"
                        data-bs-slide="prev"
                      >
                        <span
                          class="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span class="visually-hidden">Previous</span>
                      </button>
                      <button
                        class="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleInterval2"
                        data-bs-slide="next"
                      >
                        <span
                          class="carousel-control-next-icon"
                          aria-hidden="true"
                        ><MdOutlineArrowForwardIos /></span>
                        <span class="visually-hidden">Next</span>
                      </button>
                    </div>
                    <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                      <p>
                        <strong>Accesorios Luyra</strong>
                      </p>
                    </div>
                    {/* hasta aqui */}
                  </div>
                </div>

                
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Tiendas;