import React from "react";
import "../estilos/login.css";
import luyra from "../images/shirt_luyra.png";
import luy from "../images/fashion_luyra.png";
import cute from "../images/cute_luyra.png";

function Tiendas() {
  return (
    <div className="login">
      <section class="h-100 gradient-custom">
        <div class="container py-5">
          <div class="row d-flex justify-content-center my-4">
            <div class="col-md-8">
              <div class="card mb-4">
                <div class="card-header py-3">
                  <h5 class="mb-0">Tienda Luyra</h5>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
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
                                    Go somewhere
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
                                  <h5 class="card-title">Card title</h5>
                                  <p class="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                  </p>
                                  <a href="#" class="btn btn-primary">
                                    Go somewhere
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
                                  <h5 class="card-title">Card title</h5>
                                  <p class="card-text">
                                    Some quick example text to build on the card
                                    title and make up the bulk of the card's
                                    content.
                                  </p>
                                  <a href="#" class="btn btn-primary">
                                    Go somewhere
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
                            ></span>
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

                    <div class="row">
                      <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
                        <div
                          class="bg-image hover-overlay hover-zoom ripple rounded"
                          data-mdb-ripple-color="light"
                        >
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Vertical/13a.webp"
                            alt="Buso rojo"
                            class="w-100"
                          />
                          <a href="#!">
                            <div
                              class="mask"
                              style={{
                                backgroundColor: "rgba(251, 251, 251, 0.2)",
                              }}
                            ></div>
                          </a>
                        </div>
                      </div>

                      <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
                        <p>
                          <strong>Red hoodie</strong>
                        </p>
                        <p>Color: red</p>
                        <p>Size: M</p>

                        <button
                          type="button"
                          class="btn btn-primary btn-sm me-1 mb-2"
                          data-mdb-toggle="tooltip"
                          title="Remove item"
                        >
                          <i class="fas fa-trash"></i>
                        </button>
                        <button
                          type="button"
                          class="btn btn-danger btn-sm mb-2"
                          data-mdb-toggle="tooltip"
                          title="Move to the wish list"
                        >
                          <i class="fas fa-heart"></i>
                        </button>
                      </div>

                      <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
                        <div class="d-flex mb-4" style={{ maxWidth: "300px" }}>
                          <button
                            class="btn btn-primary px-3 me-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
                          >
                            <i class="fas fa-minus"></i>
                          </button>

                          <div class="form-outline">
                            <input
                              id="form1"
                              min="0"
                              name="quantity"
                              value="1"
                              type="number"
                              class="form-control"
                            />
                            <label class="form-label" for="form1">
                              Quantity
                            </label>
                          </div>

                          <button
                            class="btn btn-primary px-3 ms-2"
                            onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
                          >
                            <i class="fas fa-plus"></i>
                          </button>
                        </div>

                        <p class="text-start text-md-center">
                          <strong>$17.99</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card mb-4">
                  <div class="card-body">
                    <p>
                      <strong>Expected shipping delivery</strong>
                    </p>
                    <p class="mb-0">12.10.2020 - 14.10.2020</p>
                  </div>
                </div>
                <div class="card mb-4 mb-lg-0">
                  <div class="card-body">
                    <p>
                      <strong>We accept</strong>
                    </p>
                    <img
                      class="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                      alt="Visa"
                    />
                    <img
                      class="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                      alt="American Express"
                    />
                    <img
                      class="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                      alt="Mastercard"
                    />
                    <img
                      class="me-2"
                      width="45px"
                      src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
                      alt="PayPal acceptance mark"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card mb-4">
                  <div class="card-header py-3">
                    <h5 class="mb-0">Summary</h5>
                  </div>
                  <div class="card-body">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        Products
                        <span>$53.98</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                        Shipping
                        <span>Gratis</span>
                      </li>
                      <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                        <div>
                          <strong>Total amount</strong>
                          <strong>
                            <p class="mb-0">(including VAT)</p>
                          </strong>
                        </div>
                        <span>
                          <strong>$53.98</strong>
                        </span>
                      </li>
                    </ul>

                    <button
                      type="button"
                      class="btn btn-primary btn-lg btn-block"
                    >
                      Go to checkout
                    </button>
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
