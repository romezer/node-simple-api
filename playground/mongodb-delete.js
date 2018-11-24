// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db) => {
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');


	//delete many
	// db.collection('Todos').deleteMany({text: 'Eat lunchl'}).then((result) => {
	// 	console.log(result);
	// });

	//delete one
	// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
	// 	console.log(result);
	// });

	//findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed:false}).then((result) => {
	// 	console.log(result);
	// });

	db.collection('Users').deleteMany({name:'Rom'}).then((result) =>{
		console.log(result);
	});

	db.collection('Users').findOneAndDelete({
		_id: new ObjectID('5bf94901ae0f9f72a1d12704')
	}).then((result) => {
		console.log(result);
	});


	//db.close();
});