const express = require('express');
const path = require('path');
const exp_hbs = require('express-handlebars');
const morgan = require('morgan');
//Init
const app = express();

//Settings}

app.set('port', process.env.PORT || 4000);

app.set('views', path.join(__dirname, 'views'));

app.engine('.hbs', exp_hbs({

    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'

}));

app.set('view engine', '.hbs')

//Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

//Global variables

//Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/products.routes'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;