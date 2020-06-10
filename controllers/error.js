const express =  require('express');
const path = require('path');
const app = express();

//Allow parsing incoming requests with urlencoded payloads to send HTML response
app.use(express.urlencoded({extended:true}));

exports.error404 = (req, res, next) =>{
    res.status(404).render('404', {pageTitle: 'Page Not found'} );
};
