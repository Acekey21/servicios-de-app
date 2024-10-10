const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.get('/api/greet',(req,res) =>{
    res.json({message: 'Esta es la primer API'});
});

app.listen(port,()=>{
    console.log('Servidor corriendo en http://localhost:${port}');
});

app.use (express.json());
let estudiantes =[
    {id: 1, nombre: 'Juan Perez'},
    {id: 2, nombre: 'Monica Gomez'},
    {id: 3, nombre: 'Jose Ruiz'},
];

app.get('/estudiantes',(req,res)=>{
    res.json(estudiantes);
});

app.get('/estudiantes/:id',(req,res) =>{
    const id= parseint(req.params.id);
    const estudiante = estudiantes.find(e => e.id===id);
    if (estudiante){
        res.jsaon(estudiante);
    } else {
        res.status(404).send('Estudiante no encontrado');
    }
});

app.post('/estudiantes',(req,res) =>{
    const nuevoEstudiante = {
        id:estudiantes.length+1,
        nombre:req.body.nombre
    };
    estudiantes.push(nuevoEstudiante);
    res.status(201).json(nuevoEstudiante);
});

app.put('/estudiantes/:id', (req,res) =>{
    const id=parseInt()
})
