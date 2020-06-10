const express = require('express');
const router = express.Router();

const controllerProducts = require('../controllers/products');


//Router that send with GET method the shop.html page to the response 
router.get('/', controllerProducts.getProducts);

module.exports = router;