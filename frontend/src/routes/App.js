import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Login from '../pages/Login';
import Registro from '../pages/Registro';
import Perfil from '../pages/perfil';
import Editar from '../pages/Editar';



function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Inicio/>}/>
          <Route exact path='/Login' element={<Login/>}/>
          <Route exact path='/registro' element={<Registro/>}/>
          <Route exact path='/perfil' element={<Perfil/>}/>
          <Route exact path='/editar' element={<Editar/>}/>
       </Routes>
    </Router>
    
  );
}

export default App;
