const products = [];
let nextId = 1;

const getProduct = (req, res) => {
    if (products.length === 0) {
        return res.status(404).json({ error: "No hay productos disponibles" });
    }
    res.status(200).json({ datos: products });
};

const getProductById = (req, res) => {
    const { id } = req.params;
    const product = products.find((i) => i.id === parseInt(id));

    if (!product) {
        return res.status(404).json({ error: `No existe ese producto: ${id}` });
    }

    res.status(200).json({ datos: product });
};

const createProduct = (req, res) => {
    const body = req.body;

    if (!body || Object.keys(body).length === 0) {
        return res.status(400).json({ error: "No puede ser vacio" });
    }

    if (!body.nombre) {
        return res.status(422).json({ error: " Campo requerido" });
    }

    const newProduct = {
        id: nextId++,
        ...body,
    };
    products.push(newProduct);

    res.status(201).json({ mensaje: " Producto creado ", dato: newProduct });
};

const updateProduct = (req, res) => {
    const { id } = req.params;
    const body = req.body;
    const index = products.findIndex(i => i.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    };

    if (!body || Object.keys(body).length === 0) {
        return res.status(400).json({ error: ' El body no puede ser vacio' })
    };

    products[index] = { ...products[index], ...body };

    res.status(200).json({ mensaje: 'Producto actualizado', data: products[index] })
}

const deleteProduct = (req, res) => {
    const { id } = req.params;
    const index = products.findIndex(i => i.id === parseInt(id));

    if (index === -1) {
        return res.status(404).json({ error: 'Producto no encontrado' });
    };

    products.splice(index, 1);

    res.status(200).json({ mensaje: 'Producto eliminado'})
}

export default {
    getProduct,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}