const { Router } = require('express');
const router = Router();
const mysqlConnection= require('../env/env')

router.get('/', (req, res)=>{
    mysqlConnection.query('SELECT * FROM Cursos', (err, rows, fields)=>{
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});

router.post('/', (req, res)=>{
    const { nombre, descripcion, modulos, institucion, horas, precio} = req.body;
  
    let Curso = [ nombre, descripcion, modulos, institucion, horas, precio];
  
    let nuevoCurso = `INSERT INTO Cursos( nombre, descripcion, modulos, institucion, horas, precio) 
    VALUES( ?,?,?,?,?,?)`;
    
    mysqlConnection.query(nuevoCurso, Curso, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        } else{
            res.json({message: `se ha creado un nuevo Curso`})
        }
    });
  
  });

 

module.exports = router;