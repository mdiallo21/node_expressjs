const express =  require('express');
const router = express.Router();



const controllerProducts = require('../controllers/products');


//Router with GET method with the '/add-product' path that send the add-product.html to the response
router.get('/add-product', controllerProducts.controllerGetProducts);
//Router with POST method with the '/add-product' path that send the add-product.html to the response
router.post('/add-product', controllerProducts.controllerPostProducts);
exports.router = router;
