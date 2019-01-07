const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
	text: 'first test todo' 
},{
	text: 'second test todo'
}];

beforEach((done) => {
	Todo.remove({}).then(() =>{
		return Todo.insertMany(todos);
	}).then(() => done());
});

describe('POST /todos', () =>{
	it('Shoud create a new todo', (done) =>{
		var text = 'Test todo text';

		request(app)
			.post('/todos')
			.send({text})
			.expect(200)
			.expect((res) =>{
				expect(res.body.text).tobe(text);
			})
			.end((err,res) => {
				if(err){
					return done(err);
				}

				Todo.find().then((todos) => {
					expect(todos.length).tobe(1);
					expect(todos[0].text).tobe(text);
					done();
				}).catch((e) => done(e));
			});
	});
});

