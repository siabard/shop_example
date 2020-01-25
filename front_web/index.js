const express = require('express');
const path = require('path');
const fs = require('fs');
const exphbs = require('express-handlebars');
const fetch = require("node-fetch");

// Init webserver
const app = express();
const PORT = process.env.PORT || 5000;

// middle ware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars' );

// Body parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const URL = "http://product_service:5000/";
//const URL = "http://localhost:5000";

// Routing
app.get('/', (req, res) => {


    const products = fetch(URL).then((res) => {
        return res.json();
    }).then((products) => 
    res.render('index', {
        products
    }));

    
});


app.listen(PORT, () => console.log(`front_web start on ${PORT}`));