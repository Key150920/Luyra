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





router.post('/autenticacion', (req, res)=>{
    const txtusu= req.body[0];
    const txttel = req.body[1];
    const txtpas = req.body[2];
    console.log(req.body)
    const sql = 'SELECT * FROM usuario WHERE correo = ? AND telefono = ? AND contraseña';

    mysqlConnection.query(sql, [txtusu, txttel, txtpas], (err, results) => {
        console.log(txtusu, txttel, txtpas)
      if (err) throw err;
  
      if (results.length > 0) {
        res.json({ mensaje: 'Usuario autenticado correctamente' });
        console.log("result -->",results)
        return results.nombre
      } else {

        res.status(401).json({ mensaje: 'Correo o contraseña incorrectos' });
        return false
      }
    });
})



router.post('/', (req, res)=>{
    const { Correo, Contraseña, Nombre_U, Apellido, Departamento, Ciudad, Ocupacion} = req.body;
  
    let usuario = [ Correo, Contraseña, Nombre_U, Apellido, Departamento, Ciudad, Ocupacion];
  
    let nuevoUsuario = `INSERT INTO usuario( Correo, Contraseña, Nombre_U, Apellido, Departamento, Ciudad, Ocupacion) 
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