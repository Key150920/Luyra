const { Router } = require('express');
const router = Router();
const mysqlConnection= require('../env/env')

router.get('/', (req, res)=>{
    mysqlConnection.query('SELECT * FROM usuarios', (err, rows, fields)=>{
        if(!err) {
            return res.json(rows);
        }else {
            console.log(err);
        }
    });
});



//codigo del login 




router.post('/', (req, res)=>{
    const { Correo, Contraseña, Nombre_U, Apellido, Departamento, Ciudad, Ocupacion} = req.body;
  
    let usuario = [ Correo, Contraseña, Nombre_U, Apellido, Departamento, Ciudad, Ocupacion];
  
    let nuevoUsuario = `INSERT INTO usuarios( Correo, Contraseña, Nombre_U, Apellido, Departamento, Ciudad, Ocupacion) 
    VALUES( ?, SHA1(?),?,?,?,?,?)`;
    
    mysqlConnection.query(nuevoUsuario, usuario, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        } else{
            res.json({message: `se ha registrado otro usuario`})
        }
    });
  
  });

 

module.exports = router;