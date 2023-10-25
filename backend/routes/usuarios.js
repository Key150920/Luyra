const { Router} = require('express');
const router = Router();
const mysqlConnection= require('../env/env')

router.post('/registro',(req,res)=>{
    console.log(req.body);
    const usu = req.body[0];
    const correo = req.body[1];
    const contraseña = req.body[2];


    let usuario = [usu, correo, contraseña];
    

    let nuevoUsuario = `INSERT INTO usuario( nombre, correo, contrasena) VALUES(?,?,?)`;

    mysqlConnection.query(nuevoUsuario, usuario, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        } else{
            res.json({message: `se ha registrado otro usuario`})
        }
    });
});

module.exports = router;
