import React from "react";
import "../estilos/login.css";

function login() {
  return (
    <div className="login">
      <section class="text-center">
        <div class="p-5 bg-image fondo" style={{ height: "300px" }}></div>

        <div
          class="card mx-4 mx-md-5 shadow-5-strong"
          style={{
            marginTop: "-100px",
            background: "hsla(0, 0%, 100%, 0.8)",
            backdropFilter: "blur(30px)",
          }}
        >
          <div class="card-body py-5 px-md-5">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <h2 class="fw-bold mb-5">Iniciar sesión</h2>
                <form>
                  

                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      class="form-control"
                    />
                    <label class="form-label" for="form3Example3">
                      Correo electrónico
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      class="form-control"
                    />
                    <label class="form-label" for="form3Example4">
                      Contraseña
                    </label>
                  </div>

                  
                  <button type="submit" class="btn btn-primary btn-block mb-4">
                    ¡Iniciar sesión ahora!
                  </button>

                  <div class="text-center">
                    <p></p>
                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-5 px-4"
                    >
                      <i class="fab fa-facebook-f"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <i class="fab fa-google"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <i class="fab fa-twitter"></i>
                    </button>

                    <button
                      type="button"
                      class="btn btn-link btn-floating mx-1"
                    >
                      <i class="fab fa-github"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default login;
