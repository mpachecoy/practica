import express from 'express';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    const mensaje = { mensaje: "Hola mundo!"}
    res.json({ mensaje, status: 'ok' })
});


app.post('/echo', (req, res) => {
    const body = req.body;

    res.json({ mensaje: " Datos recibidos ", satatus: 'ok', datos: body })
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});


export default app;
