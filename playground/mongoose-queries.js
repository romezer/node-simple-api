const {ObjectID} = require('mongodb');

const {mogoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/users');

var id = '5c324651ff34210dc7220069';
var userId = '5c33b98d9ae586f34d875f1c';

if(!ObjectID.isValid(id)){
	console.log('id not valid');
}

// Todo.find({
// 	_id: id
// }).then((todos) => {
// 	console.log('Todos',todos);
// });

// Todo.findOne({
// 	_id: id
// }).then((todo) => {
// 	console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
// 	if(!todo){
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo by id',todo);
// }).catch((e) => console.log(e));

User.find({
	_id: userId
}).then((users) =>{
	console.log('users',users);
});

User.findOne({
	_id: userId
}).then((user) => {
	console.log('user',user);
});

User.findById(userId).then((user) =>{
	if(!user){
		return console.log('Id not found');
	}
	console.log('user',user);
}).catch((e) => console.log(e));