import express from 'express';
import productRouter from './routes/router.js'

const app = express();
app.use(express.json());

app.use('/api/products', productRouter);


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});


export default app;
