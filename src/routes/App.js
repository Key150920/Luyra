import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Login from '../pages/Login';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Inicio/>}/>
          <Route exact path='/Login' element={<Login/>}/>
       </Routes>
    </Router>
    
  );
}

export default App;
