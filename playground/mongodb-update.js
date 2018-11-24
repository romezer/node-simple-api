// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').findOneAndUpdate({
	// 	_id : new ObjectID('5bf969f10e1712c07cadda42')
	// },{
	// 	$set:{
	// 		completed: true
	// 	}
	// },{
	// 	returnOriginal: false
	// }).then((result) =>{
	// 	console.log(result)
	// });

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5bf9487b7dfdb46ec1b331a9') 
	},{
		$set:{
			name: 'Rom'
		},
		$inc:{
			age: 1
		}
	},{
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});

	//db.close();
});