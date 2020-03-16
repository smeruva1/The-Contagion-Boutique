//Import express Web application server that provides routes, http communication using REST apis
const express = require('express');
//Import routes definded in routes folder
const routes = require('./routes');
//create sequelize obj from connections definded in connection
const sequelize = require('./config/connection');

//const expressHandlebars = require('express-handlebars');

//set up express middleware to parse both json and urlencoded
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static('public'));

//app.engine('handlebars', expressHandlebars({ defaultLayout: 'main' }));
//app.set('view engine', 'handlebars');

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});
