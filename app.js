import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());

app.post('/multiplicar', (req, res) => {
    const filas = req.body.filas;
    const columnas = req.body.columnas;
    const matriz1 = req.body.matriz1;
    const matriz2 = req.body.matriz2;
    
    // Multiplicación de matrices
    const resultado = [];
    for (let i = 0; i < filas; i++) {
        for (let j = 0; j < columnas; j++) {
            let sum = 0;
            for (let k = 0; k < columnas; k++) {
                sum += matriz1[i * columnas + k] * matriz2[k * columnas + j];
            }
            resultado.push(sum);
        }
    }
    
    res.json(resultado);
});

app.listen(PORT, () => {
    console.log('Servidor escuchando en el puerto ' + PORT);
});
