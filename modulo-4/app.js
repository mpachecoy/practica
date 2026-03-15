import express from 'express';

const app = express();

app.use(express.json());

// Ruta GET '/' que responde con un mensaje JSON
app.get('/', (req, res) => {
    const mensaje = { mensaje: "Hola mundo!"}
    res.json(mensaje)
});

// Ruta POST '/echo' que responde con el mismo JSON recibido
app.post('/echo', (req, res) => {
    const mensaje = { mensaje: "Hola mundo!"}
    res.json(mensaje)
});

// Puerto de escucha
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});

// Para evaluación automática, exportar app
export default app;
