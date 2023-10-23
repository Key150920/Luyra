const { Router } = require('express');
const router = Router();
const mysqlConnection= require('../env/env')

router.get('/', (req, res)=>{
    mysqlConnection.query('SELECT * FROM cursosusuarios', (err, rows, fields)=>{
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});


router.get('/datos', (req, res)=>{
    mysqlConnection.query('SELECT Nombre_U, Apellido, id_curso, descripcion, id_usuario, nombre, modulos, institucion, horas, precio FROM cursosusuarios C, usuarios U, Cursos Cr WHERE C.id_usuario=U.id AND C.id_curso=Cr.id', (err, rows, fields)=>{
        if(!err) {
            res.json(rows);
        }else {
            console.log(err);
        }
    });
});

router.post('/', (req, res)=>{
    const { id_usuario, id_curso} = req.body;
  
    let Curso = [ id_usuario, id_curso];
  
    let nuevoCurso = `INSERT INTO cursosusuarios( id_usuario, id_curso) 
    VALUES( ?,?)`;
    
    mysqlConnection.query(nuevoCurso, Curso, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        } else{
            res.json({message: `se ha ha registrado un nuevo curso al usuario ${req.body.id_usuario}`})
        }
    });
  
  });

 

module.exports = router;