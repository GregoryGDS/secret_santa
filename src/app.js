const express = require('express');
const app = express();

const hostname = '0.0.0.0';
const port = 3000;

const mongoose = require('mongoose');
//bibliothèque ODM (Object Data Modeling) pour MongoDB et Node.js.
//Sert de passerelle entre serveur Node.js et serveur MongoDB.

mongoose.Promise = global.Promise;

//param pour corriger erreur dans warning
const mongooseParams={ 
	useUnifiedTopology:true,
	useNewUrlParser:true,
	useCreateIndex:true
}

mongoose.connect('mongodb://mongo_santa/apinodesantana', mongooseParams);
/*mongodb.//mongo_santa/nomBDD => mongo_santa=nom du container*/
//mongoose.connect('mongodb://localhost/apinodesantana', mongooseParams); //windows ET pas docker

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


const userRoute = require('./api/routes/userRoute');
const whish_listRoute = require('./api/routes/whish_listRoute');


userRoute(app);
whish_listRoute(app);

app.listen(port, hostname);