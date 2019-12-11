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

mongoose.connect('mongodb://mongo/apinodeipssi', mongooseParams);
/*mongodb.//mongo/nomBDD => mongo=nom du container*/
//mongoose.connect('mongodb://localhost/apinodeipssi', mongooseParams); //windows et pas docker

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


const postRoute = require('./api/routes/postRoute');
const commentRoute = require('./api/routes/commentRoutes');


postRoute(app);
commentRoute(app);

app.listen(port, hostname);
