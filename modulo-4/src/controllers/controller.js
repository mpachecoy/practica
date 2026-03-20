import { readProducts, writeProducts } from "../../config/db.js";

let nextId = 1;

const getProduct = (req, res) => {
    try {
        const products = readProducts();
        console.log(products);

        if (products.length === 0) {
            return res.status(404).json({ error: "No hay productos disponibles" });
        }
        res.status(200).json({ datos: products });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const getProductById = (req, res) => {
    try {
        const { id } = req.params;
        const products = readProducts();
        const product = products.find((i) => i.id === parseInt(id));

        if (!product) {
            return res.status(404).json({ error: `No existe ese producto: ${id}` });
        }

        res.status(200).json({ datos: product });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createProduct = (req, res) => {
    try {
        const body = req.body;
        const products = readProducts();

        if (!body || Object.keys(body).length === 0) {
            return res.status(400).json({ error: "No puede ser vacio" });
        }

        if (!body.nombre) {
            return res.status(422).json({ error: "Campo requerido" });
        }

        const newProduct = {
            ...body,
            id: nextId++,
        };

        products.push(newProduct);
        writeProducts(products);

        res.status(201).json({ mensaje: " Producto creado ", dato: newProduct });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const updateProduct = (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const index = products.findIndex((i) => i.id === parseInt(id));

        if (index === -1) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }
        1;

        if (!body || Object.keys(body).length === 0) {
            return res.status(400).json({ error: " El body no puede ser vacio" });
        }

        products[index] = { ...products[index], ...body };

        res
            .status(200)
            .json({ mensaje: "Producto actualizado", data: products[index] });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const deleteProduct = (req, res) => {
    try {
        const { id } = req.params;
        const index = products.findIndex((i) => i.id === parseInt(id));

        if (index === -1) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }

        products.splice(index, 1);

        res.status(200).json({ mensaje: "Producto eliminado" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export default {
    getProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
};
