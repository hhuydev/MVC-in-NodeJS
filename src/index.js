const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const route = require('./routes/index.route');
const db = require('./config/db/index');
const methodOverride = require('method-override');

const port = process.env.PORT || 3000;

const app = express();

/**Connect DB */
db.connect();

/**Overided method tren form html */
app.use(methodOverride('_method'));

/**Dung middleware de lay du lieu submit form */
app.use(
    express.urlencoded({
        extended: true,
    }),
);
/**Dung middleware chuyen thanh json khi gui du lieu len server */
app.use(express.json());

/**Config file static */
app.use(express.static(path.join(__dirname, 'public')));

/**HTTP logger */
app.use(morgan('combined'));

/**HandelBars Engine Template */
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

/**Goi den file index chua cac route */
route(app);

app.listen(port, () => console.log('Server is up on ' + port));
