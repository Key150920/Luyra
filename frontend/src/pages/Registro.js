import React, { useState } from 'react';
import Footer from '../componentes/footer';
import '../estilos/main.css';
import axios from 'axios';
import Inicio from './Inicio';

function Registro() {
  const [miRegistro, setMiRegistro] = useState("false");


  async function peticionPost(txtu,txtc,txtcc,txtpas,txtpasc){
    await axios.post('http://localhost:4001/api/usuarios/registro', [txtu,txtc,txtcc,txtpas,txtpasc])
    .then(response => {
      if(response){
        setMiRegistro("true");
        alert("Bienvenido")
        document.getElementById("registrof").style.display = "none";
      }
      else{
        setMiRegistro("false");
        alert("Hay un error en alguno de los campos");
        document.getElementById("txtu").value= "";
        document.getElementById("txtc").value= "";
        document.getElementById("txtcc").value= "";
        document.getElementById("txtpas").value= "";
        document.getElementById("txtpasc").value= "";

      }
      
    }).catch(error => {
      console.log(error.message);
    })

  }

  function iniciarsesion(e) {
    e.preventDefault();
    var txtu = document.getElementById("txtu").value;
    var txtc = document.getElementById("txtc").value;
    var txtcc = document.getElementById("txtcc").value;
    var txtpas = document.getElementById("txtpas").value;
    var txtpasc = document.getElementById("txtpasc").value;

    if (txtu.length === 0 || txtc.length === 0 || txtcc.length === 0 || txtpas.length === 0 || txtpasc.length === 0) {
      alert("No puede haber campos vacíos");
    }
    if (txtpas !== txtpasc) {
      alert("Las contraseñas no coinciden");
    }
    else {
      var res = peticionPost(txtu, txtc, txtcc, txtpas, txtpasc)
    }
    
  }



  return (
    <div id='registrof'>
      <div className='Registro'>
        <section class="vh-100 bg-image fondoregistro">
          <div class="mask d-flsex align-items-center h-100 fondo">
            <div class="container h-100">
              <div class="row d-flex justify-content-center align-items-center h-100">
                <div class="col-12 col-md-9 col-lg-7 col-xl-6">
                  <div class="card m-2" style={{ borderRadius: "15px" }}>
                    <div class="card-body p-5">
                      <h2 class="text-uppercase text-center mb-5">Registrate</h2>

                      <form>

                        <div class="form-outline mb-4">
                          <input type="text" id="txtu" class="form-control form-control-lg" required />
                          <label class="form-label" for="form3Example1cg">Nombre de usuario</label>
                        </div>

                        <div class="form-outline mb-4">
                          <input type="email" id="txtc" class="form-control form-control-lg" required />
                          <label class="form-label" for="form3Example3cg">Correo electronico</label>
                        </div>

                        <div class="form-outline mb-4">
                          <input type="email" id="txtcc" class="form-control form-control-lg" required />
                          <label class="form-label" for="form3Example3cg">Confirmar tu correo electronico</label>
                        </div>

                        <div class="form-outline mb-4">
                          <input type="password" id="txtpas" class="form-control form-control-lg" required />
                          <label class="form-label" for="form3Example4cg">Contraseña</label>
                        </div>

                        <div class="form-outline mb-4">
                          <input type="password" id="txtpasc" class="form-control form-control-lg" required />
                          <label class="form-label" for="form3Example4cdg">Confirma tu contraseña</label>
                        </div>

                        <div class="form-check d-flex justify-content-center mb-5">
                          <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" required />
                          <label class="form-check-label" for="form2Example3g">
                            Acepto todas las declaraciones en <a href="#!" class="text-body"><u>Terminos y condiciones</u></a>
                          </label>
                        </div>

                        <div class="d-flex justify-content-center">
                          <button type="submit"
                            class="btn registro btn-block btn-lg  text-body" onClick={iniciarsesion}>Registro</button>
                        </div>

                        <p class="text-center text-muted mt-5 mb-0">Al registrarte aceptas nuestras políticas de privacidad <a href="#!"
                          class="fw-bold text-body"><u>Politicas de privacidad</u></a></p>

                      </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
      { miRegistro === "true" && <Inicio/>}
    </div>

  );

}
export default Registro;