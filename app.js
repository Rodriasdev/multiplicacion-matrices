import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.post('/multiplicar', (req, res) => {
    const filas1 = req.body.filas1;
    const columnas1 = req.body.columnas1;
    const filas2 = req.body.filas2;
    const columnas2 = req.body.columnas2;
    const matriz1 = req.body.matriz1;
    const matriz2 = req.body.matriz2;
    

    if (columnas1 !== filas2) {
        return res.status(400).json({ error: "Las matrices no pueden ser multiplicadas debido a dimensiones inválidas." });
    }
    
   
    const resultado = [];
    for (let i = 0; i < filas1; i++) {
        for (let j = 0; j < columnas2; j++) {
            let sum = 0;
            for (let k = 0; k < columnas1; k++) {
                sum += matriz1[i * columnas1 + k] * matriz2[k * columnas2 + j];
            }
            resultado.push(sum);
        }
    }
    
    res.json(resultado);
});

app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto ' + PORT);
});
