describe('ToDoController', function(){
  beforeEach(module('toDoApp'));

  var ctrl;

  beforeEach(inject(function($controller){
    ctrl = $controller('ToDoController');
  }));

  it('initialises with two ToDos', function() {
    todos = ctrl.todos;
    expect(todos.length).toEqual(2);
  });

	it('initialises with a first ToDo set to complete', function() {
    todos = ctrl.todos;
    expect(todos[0].completed).toEqual(true);
  });

  it('initialises with a first ToDo set to complete', function() {
    expect(ctrl.todos[1].completed).toEqual(false);
  });

  it('adds the given task to the todos array with the addToDo() function', function(){
  	ctrl.addToDo('ToDo3');
  	expect(ctrl.todos[ctrl.todos.length-1].text).toEqual('ToDo3');
  });

  it('sets the task as not completed when it is added', function(){
  	ctrl.addToDo('ToDo3');
  	expect(ctrl.todos[ctrl.todos.length-1].completed).toEqual(false);
  });

  it('removes the last task in the array with the removeToDo() function', function(){
  	ctrl.removeToDo();
  	expect(ctrl.todos.length).toEqual(1);
  });

});
