import express from 'express';
import bodyParser from 'body-parser';
import {ProductDao} from './dao/product-dao.js'
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

app.post('/products', (req, res) => {
    console.log(`Create a product for ${JSON.stringify(req.body)}`);
    res.json({}).status(200);
});

app.put('/products/:id', (req, res) => {
    console.log(`Update product for id: ${req.params.id} for payload ${req.body}`);
    res.json({}).status(200);
});

app.delete('/products/:id', (req, res) => {
    console.log(`Delete product for id: ${req.params.id}`);
    res.json({}).status(200);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})