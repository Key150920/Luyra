import React from 'react';
import Footer from '../componentes/footer';
import '../estilos/main.css';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

function Editar() {
    return (
        <div className='Perfil'>
            <section class="vh-100" style={{ backgroundColor: "#f4f5f7" }}>
                <div class="container pb-5 pt-2 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col col-lg-6 mb-4 mb-lg-0">
                            <div className='pb-3'>
                                <NavLink to='/perfil'>
                                    <MdOutlineArrowBackIosNew />
                                </NavLink>

                            </div>
                            <div class="card mb-3" style={{ borderRadius: ".5rem" }}>
                                <div class="row g-0">


                                    <div class="col-md-4 gradient-custom text-center text-white"
                                        style={{ borderTopRightRadius: ".5rem", borderBottomLeftRadius: ".5rem" }}>
                                        <img src="https://www.creartuavatar.com/svgavatars/temp-avatars/svgA43734100283532085.png"
                                            alt="Avatar" class="img-fluid my-5" style={{ width: "100px" }} />
                                        <h5>Angie Zuñiga</h5>
                                        <p>Aprendiz</p>
                                        <i class="far fa-edit mb-5"></i>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body p-4">
                                            <h6>Información</h6>
                                            <hr class="mt-0 mb-4" />

                                            <div class="row pt-1">
                                                <div class="col-6 mb-3">
                                                    <h6>Email</h6>
                                                    {/* <input placeholder='email'></input> */}
                                                </div>
                                                <div class="col-6 mb-3">
                                                    <h6>Celular</h6>
                                                    {/* <input placeholder='celular'></input> */}
                                                    <input></input>
                                                </div>
                                            </div>
                                            <h6>Más información</h6>
                                            <hr class="mt-0 mb-4" />
                                            <div class="row pt-1">
                                                <div class="col-6 mb-3">
                                                    <h6>Fecha de nacimiento</h6>
                                                    <p class="text-muted">23/06/2002</p>
                                                </div>
                                                <div class="col-6 mb-3">
                                                    <h6>Sexo</h6>

                                                    <select class="form-select" aria-label="Default select example">
                                                      <option selected>Seleccionar</option>
                                                      <option value="1">Mujer</option>
                                                      <option value="2">Hombre</option>
                                                      <option value="3">No binario</option>
                                                        
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="d-flex justify-content-center text-center">
                                                <div className='col-6'>
                                                    <button type="button"
                                                    class="btn editar btn-block btn-lg  text-body">Guardar</button>
                                                </div>
                                                
                                                <div className='col-6'>
                                                    <button type="button"
                                                    class="btn editar btn-block btn-lg  text-body">Cancelar</button>
                                                </div>
                                            </div>

                                            <div class="d-flex justify-content-start">
                                                <a href="#!"><i class="fab fa-facebook-f fa-lg me-3"></i></a>
                                                <a href="#!"><i class="fab fa-twitter fa-lg me-3"></i></a>
                                                <a href="#!"><i class="fab fa-instagram fa-lg"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>


    );
}

export default Editar;