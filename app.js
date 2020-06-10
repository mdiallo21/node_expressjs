
const express =  require('express');
const path = require('path');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const route404 = require('./controllers/error')

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');
//Allow parsing incoming requests with urlencoded payloads to send HTML response
app.use(express.urlencoded({extended:true}));

//Send static content to the response (the css files)
app.use(express.static(path.join(__dirname, 'public')));

//Serve the different routes using any method
app.use('/admin', adminRoutes.router);
app.use(shopRoutes);

//Send the page-not-found page
app.use(route404.error404);



app.listen(3000);