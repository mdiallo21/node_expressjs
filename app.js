
const express =  require('express');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

//Allow parsing incoming requests with urlencoded payloads to send HTML response
app.use(express.urlencoded({extended:true}));

//Send static content to the response (the css files)
app.use(express.static(path.join(__dirname, 'public')));

//Serve the different routes using any method
app.use('/admin', adminRoutes);
app.use(shopRoutes);

//Send the page-not-found page
app.use((req, res, next) =>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
})



app.listen(3000);