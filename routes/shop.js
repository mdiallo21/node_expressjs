const express = require('express');
const path = require('path');


const mainDir = require('../util/path');

const router = express.Router();

//Router that send with GET method the shop.html page to the response 
router.get('/', (req, res, next) => {
    res.sendFile(path.join(mainDir, 'views', 'shop.html'));
});

module.exports = router;