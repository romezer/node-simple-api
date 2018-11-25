var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/users');
var {authenticate} = require('./middleware/authenticate');


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req,res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	})
});

app.post('/users', (req,res) => {
	var user = new User({
		email: req.body.email,
		password: req.body.password
	});

	user.save().then(() => {
		return user.generateAuthToken();
}).then((token) =>{
	res.header('x-auth',token).send(user);
}).catch((e) => {
		console.log('Error',e);
		res.status(400).send(e);
	})
});




app.get('/users/me', authenticate,  (req,res) => {
	res.send(req.user);
});






app.listen(3000, ()=> {
	console.log('Started on port 3000');
});