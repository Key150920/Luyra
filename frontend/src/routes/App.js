import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Login from '../componentes/login';
import Registro from '../pages/Registro';
import Perfil from '../pages/perfil';
import Editar from '../pages/Editar';
import Tienda from '../componentes/tienda';
import Comunidad from '../componentes/comunidad';



function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Inicio/>}/>
          <Route exact path='/comunidad' element={<Comunidad/>}/>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/registro' element={<Registro/>}/>
          <Route exact path='/perfil' element={<Perfil/>}/>
          <Route exact path='/editar' element={<Editar/>}/>
          <Route exact path='/tienda' element={<Tienda/>}/>
       </Routes>
    </Router>
    
  );
}

export default App;
