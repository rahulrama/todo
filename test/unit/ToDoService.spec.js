describe('ToDoService', function(){

	beforeEach(module('toDoApp'));

	var service;
	var factory;
	var httpbackend;

	var data = [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}];

	beforeEach(inject(function(ToDoService,ToDoFactory,$httpBackend){
		service = ToDoService;
		factory = ToDoFactory;
		httpbackend = $httpBackend;
	}));

	it('should return a promise of the data from the API',function(){
		httpbackend.expect('GET','http://quiet-beach-24792.herokuapp.com/todos.json').respond(data);
		service.getAll().then(function(response){
			expect(response).toEqual([new factory("ToDo1",true), new factory("ToDo2",false)])
		});
		httpbackend.flush();
	});

});