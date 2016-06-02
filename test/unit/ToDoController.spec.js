describe('ToDoController', function(){
  
  beforeEach(module('toDoApp'));

  var ctrl;
  var factory;
  var httpbackend;
  var data;

  beforeEach(inject(function($controller,ToDoFactory,$httpBackend){
    ctrl = $controller('ToDoController');
    factory = ToDoFactory;
    httpbackend = $httpBackend;
		data = [{text: "ToDo1", completed: true}, {text: "ToDo2", completed: false}];
    httpbackend.expect('GET','http://quiet-beach-24792.herokuapp.com/todos.json').respond(data);
    httpbackend.flush();
  }));

  it('initialises with several todos', function() {
    var todo1 = new factory(data[0].text, data[0].completed);
    var todo2 = new factory(data[1].text, data[1].completed);
    expect(ctrl.todos).toEqual([todo1, todo2]);
  });

  it('adds a ToDo object to the todos array with the addToDo() function', function(){
  	ctrl.addToDo('ToDo');
  	expect(ctrl.todos[ctrl.todos.length-1].text).toEqual('ToDo');
  });

  it('sets the task of the ToDo object as not completed when the todo is added', function(){
  	ctrl.addToDo('ToDo');
  	expect(ctrl.todos[ctrl.todos.length-1].completed).toEqual(false);
  });

  it('removes the last task in the array with the removeToDo() function', function(){
  	ctrl.removeToDo();
  	expect(ctrl.todos.length).toEqual(1);
  });

});
