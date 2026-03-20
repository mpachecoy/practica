import express from 'express';
import productRouter from './routes/router.js';
import { initDB } from '../config/db.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/api/products', productRouter);
initDB();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});


export default app;
