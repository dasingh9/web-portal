import express from 'express';
import bodyParser from 'body-parser';
import { ProductDao } from './dao/product-dao.js'
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

const productDao = new ProductDao();

app.get('/products', async (req, res) => {
    console.log("Get all products");
    const products = await productDao.getAllProducts();
    console.log(JSON.stringify(products));
    res.json(products).status(200);
});

app.post('/products', async (req, res) => {
    const product = req.body;
    await productDao.createProduct(product);
    res.status(200).json(product);
});

app.put('/products/:id', async (req, res) => {
    try {
        const id = Number(req.params.id);
        const product = req.body;
        await productDao.updateProduct(id, product);
        res.json(product).status(200);
    }
    catch (error) {
        console.error(error);
        const customError = {
            message: "Unable to update product",
            reason: "Unknown"
        };
        res.status(500).json(customError);
    }
});

app.delete('/products/:id', async(req, res) => {
   try {
        const id = Number(req.params.id);
        const product = await productDao.deleteProduct(id);
        res.status(200).json(product);
    }
    catch (error) {
        console.error(error);
        const customError = {
            message: "Unable to delete product",
            reason: "Unknown"
        };
        res.status(500).json(customError);
    }
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})