import React, { useState } from "react";
 /*aquí va el import del menu*/
import "../estilos/login.css";
import Tienda from '../pages/tienda';


function Login() {
  const [MiLogin, setMiLogin] = useState("false");
  const [usu, setUsu] = useState("");
  const [pas, setPas] = useState("");


  function IniciarSesion(e){
    e.preventDefault();
    var txtusu = document.getElementById("txtusu").value;
    var txtpas = document.getElementById("txtpas").value;
    if(txtusu.length===0 || txtpas.length===0){
      alert("¡Complete los datos faltantes!");


    }else{
      if(usu == "admin" && pas=="123"){
        setMiLogin("true");
        document.getElementById("form_login").style.display = "none";
        /*Aquí hay que colocar el menu*/



      }else{
        setMiLogin("true");
        alert("¡Error de Usuario y/o Contraseña!");
        document.getElementById("txtusu").value = "";
        document.getElementById("txtpas").value = "";
        document.getElementById("txtusu").focus();
      }

    }

  }




  return (
    <div className="Login">
      <div className="login" id="form_login">
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
                <form > 
                  

                  <div class="form-outline mb-4">
                    <input
                      type="email"
                      id="txtusu"
                      class="form-control"
                      onChange={ (e)=>setUsu(e.target.value) }
                    />
                    <label class="form-label" for="form3Example3">
                      Correo electrónico
                    </label>
                  </div>

                  <div class="form-outline mb-4">
                    <input
                      type="password"
                      id="txtpas"
                      class="form-control"
                      onChange={ (e)=>setPas(e.target.value) }
                    />
                    <label class="form-label" for="form3Example4">
                      Contraseña
                    </label>
                  </div>

                  
                  <button type="submit" class="btn btn-primary btn-block mb-4" onClick={ IniciarSesion}>
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
    {MiLogin===true && <Tienda/>}
    </div>
    
  );
}
export default Login;
