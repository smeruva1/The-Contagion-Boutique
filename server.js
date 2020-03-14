const express = require('express');
const routes = require('./routes');
//const expressHandlebars = require('express-handlebars');

const sequelize = require('./config/connection');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static('public'));

//app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
//app.set('view engine', 'handlebars');

app.use(routes);


sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
