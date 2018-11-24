// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').insertOne({
	// 	text: 'Somthing to do',
	// 	completed: false
	// },(err, result) => {
	// 	if(err){
	// 		return console.log('Unable insert todo',err);
	// 	}
	// 	console.log(JSON.stringify(result.ops, undefined, 2))
	// });

	// Insert new doc intp Users (name, age, location)
	// db.collection('Users').insertOne({
	// 	name: 'Rom',
	// 	age: 30,
	// 	location: 'Tel Aviv'
	// }, (err,result) => {
	// 	if(err){
	// 		return console.log('Unable to insert to Users',err);
	// 	}
	// 	console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
	// });

	db.close();
});