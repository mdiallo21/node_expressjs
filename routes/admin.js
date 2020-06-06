const express =  require('express');
const path = require('path');

//Retrieve the project main directory path
const mainDir = require('../util/path');

const router = express.Router();

//Router with GET method with the '/add-product' path that send the add-product.html to the response
router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(mainDir, 'views', 'add-product.html'));
});
//Router with POST method with the '/add-product' path that send the add-product.html to the response
router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    res.render(path.join(mainDir, 'views', 'add-product.html'));
});
module.exports = router;