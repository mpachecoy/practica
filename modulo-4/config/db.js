import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.join(__dirname, '../data');
const filePath = path.join(dataDir, 'products.json');

export const initDB = () => {
    try {
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, JSON.stringify([], null, 2));
            console.log('Archivo products.json creado');
        }
        console.log('Base de datos inicializada correctamente');

    } catch (err) {
        console.error('Error al inicializar la base de datos:', err.message);
        process.exit(1);
    }
};

export const readProducts = () => {
    try {
        const data = fs.readFileSync(filePath, 'utf-8');

        if (!data.trim()) return [];

        return JSON.parse(data);

    } catch (err) {
        if (err instanceof SyntaxError) {
            throw new Error('El archivo de datos está corrupto');
        }
        throw new Error(`Error al leer los datos: ${err.message}`);
    }
};

export const writeProducts = (products) => {
    try {
        fs.writeFileSync(filePath, JSON.stringify(products, null, 2));
    } catch (err) {
        throw new Error(`Error al guardar los datos: ${err.message}`);
    }
};