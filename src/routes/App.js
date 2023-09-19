import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Login from '../pages/Login';
import Tienda from '../pages/tienda';


function App() {
  return (
    <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/tienda' element={<Tienda/>}/>
          
       </Routes>
    </Router>
    
  );
}

export default App;
