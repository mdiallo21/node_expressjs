const express =  require('express');
const path = require('path');

const mainDir = require('../util/path');

const router = express.Router();


router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(mainDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body)
    res.render(path.join(mainDir, 'views', 'add-product.html'));
});
module.exports = router;